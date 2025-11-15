import type { Meta, StoryFn } from "@storybook/react";
import { rem } from "../../../../styles/font";
import { ListItem003 } from "./index";

const meta: Meta<typeof ListItem003> = {
  title: "Basic/ListItem/Product003",
  component: ListItem003,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof ListItem003> = (args) => (
  <ul style={{ padding: "20px", margin: 0, listStyle: "none" }}>
    <ListItem003 {...args} />
  </ul>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <p style={{ fontSize: rem(24) }}>
      "これはポイント付きのリストアイテムです。長いテキストでも改行されて表示されます。"
    </p>
  ),
  onClick: () => alert("クリックされました！")
};

export const WithCustomAppearance: StoryFn<typeof ListItem003> = (args) => (
  <ul
    style={{ padding: "20px", margin: 0, listStyle: "none", fontSize: rem(18) }}
  >
    <ListItem003 {...args} />
  </ul>
);
WithCustomAppearance.args = {
  children: (
    <p style={{ fontSize: rem(18) }}>
      "カスタムスタイルを適用したリストアイテムです。"
    </p>
  ),
  appearance: {
    color: "#333",
    pointSize: 10,
    pointColor: "#0066cc",
    animationColor: "#0066cc",
    animationPointColor: "#0099ff"
  }
};

export const Clickable = Template.bind({});
Clickable.args = {
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
  children: (
    <p style={{ fontSize: rem(24) }}>
      "articleタグとしてレンダリングされるリストアイテムです。"
    </p>
  )
};
