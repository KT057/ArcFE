import type { Meta, StoryFn } from "@storybook/react";
import { RebitaPanel } from "./index";

const meta: Meta<typeof RebitaPanel> = {
  title: "Advanced/Rebita/Panel",
  component: RebitaPanel,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof RebitaPanel> = (args) => (
  <div style={{ padding: "50px", maxWidth: "400px" }}>
    <RebitaPanel {...args} />
  </div>
);

// Mock Label component for stories
const MockLabel = ({
  children,
  color = "#3b82f6"
}: {
  children: string;
  color?: string;
}) => (
  <span
    style={{
      display: "inline-block",
      padding: "4px 8px",
      backgroundColor: color,
      color: "#fff",
      fontSize: "12px",
      borderRadius: "4px",
      fontWeight: "500"
    }}
  >
    {children}
  </span>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomContent = Template.bind({});
CustomContent.args = {
  imageSrc: "/images/img-01.jpg",
  imageText: "カスタム画像のオーバーレイテキスト",
  title: "カスタムタイトル",
  description:
    "これはカスタムの説明文です。パネルの内容をカスタマイズできます。",
  labels: [
    <MockLabel key="1">カスタムラベル1</MockLabel>,
    <MockLabel key="2" color="#22c55e">
      カスタムラベル2
    </MockLabel>,
    <MockLabel key="3" color="#f59e0b">
      カスタムラベル3
    </MockLabel>
  ]
};

export const WithManyLabels = Template.bind({});
WithManyLabels.args = {
  title: "多くのラベルがあるパネル",
  imageSrc: "/images/img-01.jpg",
  description: "このパネルには多くのラベルが付いています",
  imageText: "カスタム画像のオーバーレイテキスト",
  onClick: () => alert("パネルがクリックされました!"),
  labels: [
    <MockLabel key="1">集合住宅</MockLabel>,
    <MockLabel key="2">既存建物活用</MockLabel>,
    <MockLabel key="3">多世代交流</MockLabel>,
    <MockLabel key="4" color="#22c55e">
      環境配慮
    </MockLabel>,
    <MockLabel key="5" color="#f59e0b">
      地域活性化
    </MockLabel>,
    <MockLabel key="6" color="#8b5cf6">
      コミュニティ
    </MockLabel>
  ]
};

export const Clickable = Template.bind({});
Clickable.args = {
  imageSrc: "/images/img-01.jpg",
  title: "クリック可能なパネル",
  description: "このパネルをクリックしてみてください",
  imageText: "カスタム画像のオーバーレイテキスト",
  onClick: () => alert("パネルがクリックされました!"),
  labels: [<MockLabel key="1">クリック可能</MockLabel>]
};

export const NoLabels = Template.bind({});
NoLabels.args = {
  imageText: "カスタム画像のオーバーレイテキスト",
  imageSrc: "/images/img-01.jpg",
  title: "ラベルなしパネル",
  description: "このパネルにはラベルがありません",
  labels: []
};

export const LongText = Template.bind({});
LongText.args = {
  imageSrc: "/images/img-01.jpg",
  imageText:
    "これは非常に長い画像オーバーレイテキストの例です。長いテキストがどのように表示されるかを確認できます。",
  title: "非常に長いタイトルの例：工業地域における持続可能な住環境の創造",
  description:
    "これは非常に長い説明文の例です。工業地域に建つ元企業社宅を地域に開いたシェアスペース付き分譲マンションとして再生し、多世代が交流できるコミュニティスペースを創出しています。",
  labels: [
    <MockLabel key="1">長いラベル名の例</MockLabel>,
    <MockLabel key="2">持続可能性</MockLabel>
  ]
};
