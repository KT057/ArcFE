import type { Meta, StoryFn } from "@storybook/react";
import { rem } from "../../../../styles/font";
import { ListItem001 } from "./index";

const meta: Meta<typeof ListItem001> = {
  title: "Basic/ListItem/Product001",
  component: ListItem001,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof ListItem001> = (args) => (
  <ul style={{ padding: "20px", margin: 0, listStyle: "none" }}>
    <ListItem001 {...args} />
  </ul>
);

export const Default = Template.bind({});
Default.args = {
  number: "01",
  children: (
    <p style={{ fontSize: rem(24) }}>
      "これは番号付きのリストアイテムです。長いテキストでも改行されて表示されます。"
    </p>
  ),
  appearance: {
    numberPaddingTop: 2
  },
  onClick: () => alert("クリックされました！")
};

export const WithCustomAppearance: StoryFn<typeof ListItem001> = (args) => (
  <ul style={{ padding: "20px", margin: 0, listStyle: "none" }}>
    <ListItem001 {...args} />
  </ul>
);
WithCustomAppearance.args = {
  number: "02",
  children: (
    <p style={{ fontSize: rem(18) }}>
      "カスタムスタイルを適用したリストアイテムです。"
    </p>
  ),
  appearance: {
    color: "#333",
    numberFontSize: 20,
    numberColor: "#0066cc",
    animationColor: "#0066cc"
  }
};

export const Clickable = Template.bind({});
Clickable.args = {
  number: "03",
  children: (
    <p style={{ fontSize: rem(24) }}>
      "クリック可能なリストアイテムです。ホバーやフォーカスで色が変わります。"
    </p>
  ),
  onClick: undefined
};

export const AsArticle = Template.bind({});
AsArticle.args = {
  as: "article",
  number: "04",
  children: (
    <p style={{ fontSize: rem(24) }}>
      "articleタグとしてレンダリングされるリストアイテムです。"
    </p>
  )
};
