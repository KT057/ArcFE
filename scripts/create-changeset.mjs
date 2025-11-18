#!/usr/bin/env node

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// コマンドライン引数から取得
const args = process.argv.slice(2);

const usage = `
使用方法:
  node scripts/create-changeset.mjs <type> <description>

引数:
  type         - 変更タイプ (patch/minor/major)
  description  - 変更内容の説明

例:
  node scripts/create-changeset.mjs patch "Fix bug"
  node scripts/create-changeset.mjs minor "Add new feature"
  node scripts/create-changeset.mjs major "Breaking change"

※ すべてのパッケージに対して同じバージョン変更が適用されます（fixedモード）
`;

if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
  console.log(usage);
  process.exit(0);
}

if (args.length < 2) {
  console.error("エラー: 引数が不足しています");
  console.log(usage);
  process.exit(1);
}

const [bumpType, ...descriptionParts] = args;
const description = descriptionParts.join(" ");

// すべてのパッケージを対象にする
const packages = [
  "@packages/utils",
  "@packages/hooks",
  "@packages/context",
  "@packages/tests",
  "@packages/ui"
];

// バリデーション
if (!["patch", "minor", "major"].includes(bumpType)) {
  console.error(
    "エラー: 変更タイプは patch, minor, major のいずれかである必要があります"
  );
  process.exit(1);
}

if (!description) {
  console.error("エラー: 変更内容の説明を入力してください");
  process.exit(1);
}

// Changesetファイルを作成
const timestamp = Date.now();
const filename = join(__dirname, "..", ".changeset", `change-${timestamp}.md`);

let content = "---\n";
for (const pkg of packages) {
  content += `"${pkg}": ${bumpType}\n`;
}
content += "---\n\n";
content += description + "\n";

writeFileSync(filename, content, "utf-8");

console.log("✅ Changesetファイルを作成しました:", filename);
console.log("\n対象パッケージ:");
packages.forEach((pkg) => console.log(`  - ${pkg} (${bumpType})`));
console.log("\n変更内容:", description);
console.log("\n次のステップ:");
console.log("  1. バージョンを更新: pnpm changeset version");
console.log("  2. パッケージを公開: pnpm changeset publish");
