#!/usr/bin/env python3
"""
CLIP Embedding Generator for ArcFE Screenshots

全スクリーンショットをCLIP（ViT-B/32）でベクトル化し、
component-manifest.jsonに統合します。
"""

import torch
import clip
from PIL import Image
import json
import glob
from pathlib import Path
from typing import List, Dict
import sys

def load_clip_model():
    """CLIPモデルをロード"""
    print("🔄 CLIPモデルをロード中...")
    device = "cuda" if torch.cuda.is_available() else "cpu"
    model, preprocess = clip.load("ViT-B/32", device=device)
    print(f"✅ CLIPモデルロード完了（デバイス: {device}）")
    return model, preprocess, device

def encode_image(image_path: str, model, preprocess, device) -> List[float]:
    """画像をCLIP Embeddingでベクトル化"""
    try:
        image = preprocess(Image.open(image_path)).unsqueeze(0).to(device)
        with torch.no_grad():
            embedding = model.encode_image(image)
        # L2正規化
        embedding = embedding / embedding.norm(dim=-1, keepdim=True)
        return embedding.cpu().numpy().tolist()[0]
    except Exception as e:
        print(f"⚠️ エラー: {image_path} - {e}")
        return None

def main():
    print("🚀 CLIP Embedding Generator")
    print("=" * 50 + "\n")

    # Step 1: CLIPモデルロード
    model, preprocess, device = load_clip_model()

    # Step 2: component-manifest.jsonを読み込み
    manifest_path = "packages/ui/component-manifest.json"
    print(f"\n📖 {manifest_path} を読み込み中...")

    with open(manifest_path, 'r') as f:
        manifest = json.load(f)

    total_components = len(manifest['components'])
    total_screenshots = sum(
        len(c['screenshots']['variants'])
        for c in manifest['components']
    )

    print(f"✅ {total_components}個のコンポーネント")
    print(f"✅ {total_screenshots}枚のスクリーンショット\n")

    # Step 3: 各スクリーンショットをエンコード
    print("🎨 Embeddingを生成中...\n")

    processed = 0
    for component in manifest['components']:
        for variant in component['screenshots']['variants']:
            screenshot_path = (
                f"{component['screenshots']['basePath']}/"
                f"{variant['file']}"
            )

            # Embeddingを生成
            embedding = encode_image(screenshot_path, model, preprocess, device)

            if embedding:
                variant['embeddingVector'] = embedding
                processed += 1

                # 進捗表示
                progress = (processed / total_screenshots) * 100
                sys.stdout.write(
                    f"\r[{processed}/{total_screenshots}] "
                    f"{progress:.1f}% - {variant['name']}"
                )
                sys.stdout.flush()

    print("\n\n✅ Embedding生成完了\n")

    # Step 4: メタデータ更新
    manifest['metadata']['embeddingModel'] = 'CLIP ViT-B/32'
    manifest['metadata']['embeddingDimension'] = 512
    manifest['metadata']['lastEmbeddingUpdate'] = (
        __import__('datetime').datetime.now().isoformat()
    )

    # Step 5: 保存
    print(f"💾 {manifest_path} を更新中...")
    with open(manifest_path, 'w') as f:
        json.dump(manifest, f, indent=2)

    print("✅ 保存完了\n")

    # サマリー
    print("📊 サマリー")
    print("=" * 50)
    print(f"処理済みスクリーンショット: {processed}/{total_screenshots}")
    print(f"Embeddingモデル: CLIP ViT-B/32")
    print(f"ベクトル次元数: 512")
    print("\n🎉 完了！component-manifest.jsonにEmbeddingが追加されました")
    print("\n次のステップ:")
    print("1. /match-visual コマンドでビジュアルマッチングを試す")
    print("2. Design Matcher Agentを実装")

if __name__ == "__main__":
    main()
