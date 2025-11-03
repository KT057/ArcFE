#!/bin/bash

# distディレクトリを強制的にコミットするスクリプト

set -e

echo "=== Committing dist directories ==="
echo ""

# パッケージディレクトリ
PACKAGES=(
  "packages/utils"
  "packages/hooks"
  "packages/context"
  "packages/tests"
  "packages/ui"
)

for package_dir in "${PACKAGES[@]}"; do
  if [ -d "$package_dir/dist" ]; then
    echo "📦 Adding $package_dir/dist"
    git add -f "$package_dir/dist"
  else
    echo "⚠️  $package_dir/dist does not exist"
  fi
done

echo ""
echo "✅ dist directories have been staged"
echo ""
echo "Next steps:"
echo "  1. Commit the changes: git commit -m 'Add dist for release'"
echo "  2. Create tags: pnpm tag:packages"
echo "  3. Push with tags: git push origin master --tags"
