#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('=== Root Package Version Sync ===\n');

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
