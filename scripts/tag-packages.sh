#!/bin/bash

# パッケージのバージョンに基づいてGitタグを作成するスクリプト

set -e

echo "=== Package Tagging Script ==="
echo ""

# パッケージディレクトリ
PACKAGES=(
  "packages/utils"
  "packages/hooks"
  "packages/context"
  "packages/tests"
  "packages/ui"
)

echo "以下のパッケージのタグを作成します："
echo ""

TAGS=()

for package_dir in "${PACKAGES[@]}"; do
  if [ -f "$package_dir/package.json" ]; then
    # package.jsonからパッケージ名とバージョンを取得
    package_name=$(node -p "require('./$package_dir/package.json').name")
    version=$(node -p "require('./$package_dir/package.json').version")

    # @packages/ui → packages-ui のように変換
    package_name_clean=$(echo "$package_name" | sed 's/@//g' | sed 's/\//-/g')
    tag="${package_name_clean}-v${version}"
    echo "  - $tag"
    TAGS+=("$tag")
  fi
done

echo ""
read -p "これらのタグを作成しますか? (y/N): " confirm

if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
  echo "キャンセルしました"
  exit 0
fi

echo ""
echo "タグを作成中..."

for tag in "${TAGS[@]}"; do
  # タグが既に存在するか確認
  if git rev-parse "$tag" >/dev/null 2>&1; then
    echo "⚠️  タグ $tag は既に存在します（スキップ）"
  else
    git tag "$tag"
    echo "✅ タグを作成: $tag"
  fi
done

echo ""
echo "タグの作成が完了しました"
echo ""
echo "次のステップ:"
echo "  1. タグをリモートにプッシュ:"

for tag in "${TAGS[@]}"; do
  echo "     git push origin $tag"
done

echo ""
echo "  または一括でプッシュ:"
echo "     git push origin --tags"
