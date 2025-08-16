# UI Package

このパッケージには、プロジェクトで使用するUIコンポーネントとスタイルが含まれています。

## Figmaフォントスタイル抽出スクリプト

FigmaからフォントスタイルをTypeScriptファイルとして抽出するスクリプトを提供しています。

### 使用方法

#### 1. 環境変数の設定

プロジェクトの`.env`ファイルに以下の環境変数を設定してください:

```env
FIGMA_TOKEN=your_figma_personal_access_token
FIGMA_FILE_ID=your_figma_file_id
```

#### 2. Figma Access Tokenの取得

1. [Figma Settings](https://www.figma.com/settings)にアクセス
2. "Personal access tokens"セクションで新しいトークンを生成
3. 生成されたトークンを`.env`ファイルの`FIGMA_TOKEN`に設定

#### 3. Figma File IDの取得

FigmaファイルのURLから取得できます:
- URL: `https://www.figma.com/file/abc123def456/MyDesignFile`
- File ID: `abc123def456`

このIDを`.env`ファイルの`FIGMA_FILE_ID`に設定してください。

#### 4. スクリプトの実行

```bash
# パッケージスクリプトで実行
pnpm gen:fonts

# または直接実行
ts-node scripts/figma-font-extractor.ts
```

### 出力ファイル

スクリプトを実行すると、TypeScriptファイルが生成されます:

#### figma-fonts.ts
```typescript
import { css } from "styled-components";

export const font = {
  em: {
    "roboto_700_62": css`
      font-family: "Roboto";
      font-size: ${({ theme }) => theme.size.em(62)};
      font-weight: 700;
      line-height: 1.50;
    `,
    "noto_sans_jp_400_16": css`
      font-family: "Noto Sans JP";
      font-size: ${({ theme }) => theme.size.em(16)};
      font-weight: 400;
      line-height: 1.30;
    `,
  },
  rem: {
    "roboto_700_62": css`
      font-family: "Roboto";
      font-size: ${({ theme }) => theme.size.rem(62)};
      font-weight: 700;
      line-height: 1.50;
    `,
    "noto_sans_jp_400_16": css`
      font-family: "Noto Sans JP";
      font-size: ${({ theme }) => theme.size.rem(16)};
      font-weight: 400;
      line-height: 1.30;
    `,
  }
}
```

### 使用例

```typescript
import { font } from './styles/figma-fonts';

// emバージョンを使用
const HeadingComponent = styled.h1`
  ${font.em.roboto_700_62}
`;

// remバージョンを使用
const BodyComponent = styled.p`
  ${font.rem.noto_sans_jp_400_16}
`;
```

### スクリプトの機能

- **テキストスタイル取得**: Figmaファイルからすべてのテキストスタイルを取得
- **CSS変換**: Figmaのフォントプロパティを標準的なCSSプロパティに変換
- **ファイル生成**: CSSファイルとTypeScriptファイル（styled-components用）の両方を生成
- **自動命名**: Figmaのスタイル名をCSSクラス名やTypeScript export名に自動変換

### サポートされるプロパティ

- font-family
- font-size
- font-weight
- line-height
- letter-spacing
- text-transform
- text-decoration

### 注意事項

- Figma Access Tokenは機密情報です。`.env`ファイルや環境変数で安全に管理してください
- プライベートなFigmaファイルにアクセスするには、適切な権限が必要です
- 生成されたファイルは自動生成されるため、手動で編集しないでください

### エラーのトラブルシューティング

- **401 Unauthorized**: Figma Access Tokenが無効または期限切れ
- **403 Forbidden**: ファイルへのアクセス権限がない
- **404 Not Found**: Figma File IDが正しくない
- **テキストスタイルが見つからない**: Figmaファイルにテキストスタイルが定義されていない