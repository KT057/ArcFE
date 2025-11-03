#!/bin/bash

# Changesetファイルを作成するヘルパースクリプト

echo "=== Changeset Creator ==="
echo ""
echo "利用可能なパッケージ:"
echo "  1) @packages/utils"
echo "  2) @packages/hooks"
echo "  3) @packages/context"
echo "  4) @packages/tests"
echo "  5) @packages/ui"
echo ""
echo "変更タイプ:"
echo "  patch  - バグ修正や小さな変更 (1.0.0 → 1.0.1)"
echo "  minor  - 新機能の追加 (1.0.0 → 1.1.0)"
echo "  major  - 破壊的変更 (1.0.0 → 2.0.0)"
echo ""

# パッケージ名の入力
read -p "パッケージ名を入力 (例: @packages/utils, 複数の場合はスペース区切り): " packages
if [ -z "$packages" ]; then
  echo "エラー: パッケージ名を入力してください"
  exit 1
fi

# 変更タイプの入力
read -p "変更タイプを入力 (patch/minor/major): " bump_type
if [ -z "$bump_type" ]; then
  echo "エラー: 変更タイプを入力してください"
  exit 1
fi

if [[ ! "$bump_type" =~ ^(patch|minor|major)$ ]]; then
  echo "エラー: 変更タイプは patch, minor, major のいずれかである必要があります"
  exit 1
fi

# 変更内容の入力
read -p "変更内容を入力: " description
if [ -z "$description" ]; then
  echo "エラー: 変更内容を入力してください"
  exit 1
fi

# ファイル名を生成（タイムスタンプベース）
timestamp=$(date +%s)
filename=".changeset/change-${timestamp}.md"

# Changesetファイルを作成
echo "---" > "$filename"
for package in $packages; do
  echo "\"$package\": $bump_type" >> "$filename"
done
echo "---" >> "$filename"
echo "" >> "$filename"
echo "$description" >> "$filename"

echo ""
echo "✅ Changesetファイルを作成しました: $filename"
echo ""
echo "次のステップ:"
echo "  1. バージョンを更新: pnpm changeset version"
echo "  2. パッケージを公開: pnpm changeset publish"
