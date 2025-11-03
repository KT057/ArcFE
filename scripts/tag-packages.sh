#!/bin/bash

# パッケージのバージョンに基づいてGitタグを作成するスクリプト
# fixedモードなので全パッケージが同じバージョンになる

set -e

echo "=== Package Tagging Script ==="
echo ""

# いずれかのパッケージからバージョンを取得（fixedモードなので全て同じ）
if [ -f "packages/ui/package.json" ]; then
  version=$(node -p "require('./packages/ui/package.json').version")
  tag="v${version}"

  echo "以下のタグを作成します: $tag"
  echo ""
  read -p "このタグを作成しますか? (y/N): " confirm

  if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
    echo "キャンセルしました"
    exit 0
  fi

  echo ""

  # タグが既に存在するか確認
  if git rev-parse "$tag" >/dev/null 2>&1; then
    echo "⚠️  タグ $tag は既に存在します（スキップ）"
  else
    git tag "$tag"
    echo "✅ タグを作成: $tag"
  fi

  echo ""
  echo "次のステップ:"
  echo "  タグをリモートにプッシュ:"
  echo "    git push origin $tag"
  echo ""
else
  echo "❌ packages/ui/package.json が見つかりません"
  exit 1
fi
