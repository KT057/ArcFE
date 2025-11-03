#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('=== Root Package Version Sync & Release ===\n');

// パッケージからバージョンを取得（fixedモードなので全て同じバージョン）
const packageJsonPath = join(rootDir, 'packages/ui/package.json');
const rootPackageJsonPath = join(rootDir, 'package.json');

let version;

try {
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  version = packageJson.version;
  console.log(`📦 パッケージバージョン: ${version}`);
} catch (error) {
  console.error(`Error reading ${packageJsonPath}:`, error.message);
  process.exit(1);
}

// ルートのpackage.jsonを更新
try {
  const rootPackageJson = JSON.parse(readFileSync(rootPackageJsonPath, 'utf-8'));
  const oldVersion = rootPackageJson.version;

  rootPackageJson.version = version;

  writeFileSync(rootPackageJsonPath, JSON.stringify(rootPackageJson, null, 2) + '\n', 'utf-8');

  console.log(`✅ ルートpackage.jsonのバージョンを更新: ${oldVersion} → ${version}\n`);
} catch (error) {
  console.error(`Error updating ${rootPackageJsonPath}:`, error.message);
  process.exit(1);
}

// Gitコミット
console.log('=== Git Commit ===\n');

try {
  // 変更されたファイルを確認
  const status = execSync('git status --porcelain', { cwd: rootDir, encoding: 'utf-8' });

  if (status.trim()) {
    console.log('変更されたファイル:');
    console.log(status);

    // 全ての変更をステージング
    execSync('git add .', { cwd: rootDir, stdio: 'inherit' });

    // コミット
    const commitMessage = `Release v${version}`;
    execSync(`git commit -m "${commitMessage}"`, { cwd: rootDir, stdio: 'inherit' });

    console.log(`\n✅ コミット完了: ${commitMessage}\n`);
  } else {
    console.log('⚠️  変更なし（コミットをスキップ）\n');
  }
} catch (error) {
  console.error('❌ Git コミットに失敗:', error.message);
  process.exit(1);
}

// Gitタグを作成
console.log('=== Git Tag Creation ===\n');

const tag = `v${version}`;

try {
  // タグが既に存在するか確認
  try {
    execSync(`git rev-parse ${tag}`, { cwd: rootDir, stdio: 'ignore' });
    console.log(`⚠️  タグ ${tag} は既に存在します（スキップ）`);
  } catch {
    // タグが存在しない場合は作成
    execSync(`git tag ${tag}`, { cwd: rootDir, stdio: 'inherit' });
    console.log(`✅ タグを作成: ${tag}`);
  }
} catch (error) {
  console.error(`❌ タグの作成に失敗: ${tag}`);
  process.exit(1);
}

console.log('\n=== 完了 ===');
console.log('\n次のステップ:');
console.log('  リモートにプッシュ:');
console.log(`    git push origin master --tags`);
