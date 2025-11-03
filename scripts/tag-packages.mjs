#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// パッケージディレクトリ
const packages = [
  'packages/utils',
  'packages/hooks',
  'packages/context',
  'packages/tests',
  'packages/ui',
];

console.log('=== Package Tagging Script ===\n');

const tags = [];

// 各パッケージのバージョンを取得
for (const packageDir of packages) {
  const packageJsonPath = join(rootDir, packageDir, 'package.json');
  try {
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    const tag = `${packageJson.name}@${packageJson.version}`;
    tags.push(tag);
  } catch (error) {
    console.error(`Error reading ${packageJsonPath}:`, error.message);
  }
}

if (tags.length === 0) {
  console.error('No packages found');
  process.exit(1);
}

console.log('以下のタグを作成します:\n');
tags.forEach(tag => console.log(`  - ${tag}`));
console.log('');

// タグを作成
let createdCount = 0;
let skippedCount = 0;

for (const tag of tags) {
  try {
    // タグが既に存在するか確認
    execSync(`git rev-parse ${tag}`, { stdio: 'ignore' });
    console.log(`⚠️  タグ ${tag} は既に存在します（スキップ）`);
    skippedCount++;
  } catch {
    // タグが存在しない場合は作成
    try {
      execSync(`git tag ${tag}`, { stdio: 'inherit' });
      console.log(`✅ タグを作成: ${tag}`);
      createdCount++;
    } catch (error) {
      console.error(`❌ タグの作成に失敗: ${tag}`);
    }
  }
}

console.log('');
console.log(`タグの作成が完了しました（作成: ${createdCount}, スキップ: ${skippedCount}）`);
console.log('');
console.log('次のステップ:');
console.log('  タグをリモートにプッシュ:');
console.log('    git push origin --tags');
console.log('');
console.log('  または個別にプッシュ:');
tags.forEach(tag => console.log(`    git push origin ${tag}`));
