#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('=== Package Tagging Script ===\n');

// いずれかのパッケージからバージョンを取得（fixedモードなので全て同じバージョン）
const packageJsonPath = join(rootDir, 'packages/ui/package.json');
let version;

try {
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  version = packageJson.version;
} catch (error) {
  console.error(`Error reading ${packageJsonPath}:`, error.message);
  process.exit(1);
}

const tag = `v${version}`;

console.log(`以下のタグを作成します: ${tag}\n`);

// タグを作成
try {
  // タグが既に存在するか確認
  execSync(`git rev-parse ${tag}`, { stdio: 'ignore' });
  console.log(`⚠️  タグ ${tag} は既に存在します（スキップ）`);
} catch {
  // タグが存在しない場合は作成
  try {
    execSync(`git tag ${tag}`, { stdio: 'inherit' });
    console.log(`✅ タグを作成: ${tag}`);
  } catch (error) {
    console.error(`❌ タグの作成に失敗: ${tag}`);
    process.exit(1);
  }
}

console.log('');
console.log('次のステップ:');
console.log('  タグをリモートにプッシュ:');
console.log(`    git push origin ${tag}`);
console.log('');
