#!/usr/bin/env tsx
/**
 * S3アップロードスクリプト
 *
 * packages/ui/__screenshots__/ と component-manifest.json を S3 にアップロードします
 * - バージョン番号をフォルダ名に使用
 * - アップロード後、URLをcatalog.txtに追記
 */

import "dotenv/config";
import * as fs from "node:fs";
import * as path from "node:path";
import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { glob } from "glob";

interface UploadConfig {
  bucketName: string;
  region: string;
  baseUrl: string;
}

// 環境変数から設定を取得
function getConfig(): UploadConfig {
  const bucketName = process.env.AWS_S3_BUCKET;
  const region = process.env.AWS_REGION || "ap-northeast-1";
  const baseUrl =
    process.env.S3_BASE_URL ||
    `https://${bucketName}.s3.${region}.amazonaws.com`;

  if (!bucketName) {
    throw new Error("AWS_S3_BUCKET 環境変数が設定されていません");
  }

  return { bucketName, region, baseUrl };
}

// バージョン番号を取得
function getVersion(): string {
  const packageJsonPath = path.join(process.cwd(), "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  return packageJson.version;
}

// S3クライアントを初期化
function createS3Client(region: string): S3Client {
  return new S3Client({ region });
}

// ファイルをS3にアップロード
async function uploadFile(
  s3Client: S3Client,
  bucketName: string,
  localPath: string,
  s3Key: string
): Promise<void> {
  const fileStream = fs.createReadStream(localPath);
  const contentType = getContentType(localPath);

  const upload = new Upload({
    client: s3Client,
    params: {
      Bucket: bucketName,
      Key: s3Key,
      Body: fileStream,
      ContentType: contentType
    }
  });

  await upload.done();
  console.log(`✅ アップロード完了: ${s3Key}`);
}

// Content-Typeを判定
function getContentType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  const contentTypes: Record<string, string> = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".json": "application/json",
    ".txt": "text/plain"
  };
  return contentTypes[ext] || "application/octet-stream";
}

// スクリーンショットをアップロード
async function uploadScreenshots(
  s3Client: S3Client,
  bucketName: string,
  version: string
): Promise<string[]> {
  console.log("\n📸 スクリーンショットをアップロード中...");

  const screenshotsDir = path.join(
    process.cwd(),
    "packages/ui/__screenshots__"
  );
  const screenshots = await glob("**/*.png", { cwd: screenshotsDir });

  const uploadedUrls: string[] = [];

  for (const screenshot of screenshots) {
    const localPath = path.join(screenshotsDir, screenshot);
    const s3Key = `v${version}/__screenshots__/${screenshot}`;

    await uploadFile(s3Client, bucketName, localPath, s3Key);
    uploadedUrls.push(s3Key);
  }

  console.log(
    `✅ ${screenshots.length}個のスクリーンショットをアップロードしました`
  );
  return uploadedUrls;
}

// component-manifest.json をアップロード
async function uploadManifest(
  s3Client: S3Client,
  bucketName: string,
  version: string
): Promise<string> {
  console.log("\n📦 component-manifest.json をアップロード中...");

  const manifestPath = path.join(
    process.cwd(),
    "packages/ui/component-manifest.json"
  );

  if (!fs.existsSync(manifestPath)) {
    throw new Error(
      "component-manifest.json が見つかりません。先に pnpm catalog:build を実行してください。"
    );
  }

  const s3Key = `v${version}/component-manifest.json`;
  await uploadFile(s3Client, bucketName, manifestPath, s3Key);

  console.log("✅ component-manifest.json をアップロードしました");
  return s3Key;
}

// catalog.txt に URL を書き込み（毎回新規作成）
function writeToCatalog(
  version: string,
  config: UploadConfig,
  manifestKey: string
): void {
  console.log("\n📝 catalog.txt を作成中...");

  const catalogPath = path.join(process.cwd(), "catalog.txt");

  // 既存のcatalog.txtを削除
  if (fs.existsSync(catalogPath)) {
    fs.unlinkSync(catalogPath);
    console.log("既存の catalog.txt を削除しました");
  }

  // AWS S3コンソールのURLを生成
  const manifestUrl = `https://${config.region}.console.aws.amazon.com/s3/object/${config.bucketName}?region=${config.region}&prefix=v${version}/component-manifest.json`;
  const screenshotsUrl = `https://${config.region}.console.aws.amazon.com/s3/buckets/${config.bucketName}?region=${config.region}&prefix=v${version}/__screenshots__/&showversions=false`;

  const content = [
    "# Component Catalog URLs",
    "# このファイルには、最新バージョンのS3アップロードURLが記録されます",
    "",
    `# Version ${version} - ${new Date().toISOString()}`,
    `manifest: ${manifestUrl}`,
    `screenshots: ${screenshotsUrl}`,
    ""
  ].join("\n");

  fs.writeFileSync(catalogPath, content);
  console.log(`✅ catalog.txt を作成しました`);
  console.log(`   マニフェスト: ${manifestUrl}`);
  console.log(`   スクリーンショット: ${screenshotsUrl}`);
}

// メイン処理
async function main() {
  console.log("🚀 S3 アップロード開始");
  console.log("================================\n");

  try {
    // 設定を取得
    const config = getConfig();
    const version = getVersion();

    console.log(`バージョン: ${version}`);
    console.log(`バケット: ${config.bucketName}`);
    console.log(`リージョン: ${config.region}`);
    console.log(`ベースURL: ${config.baseUrl}\n`);

    // S3クライアントを初期化
    const s3Client = createS3Client(config.region);

    // スクリーンショットをアップロード
    await uploadScreenshots(s3Client, config.bucketName, version);

    // component-manifest.json をアップロード
    const manifestKey = await uploadManifest(
      s3Client,
      config.bucketName,
      version
    );

    // catalog.txt に URL を書き込み
    writeToCatalog(version, config, manifestKey);

    console.log("\n🎉 アップロード完了！");
  } catch (error) {
    console.error("❌ エラーが発生しました:", error);
    process.exit(1);
  }
}

main().catch(console.error);
