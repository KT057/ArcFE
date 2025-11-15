import type { Meta, StoryFn } from "@storybook/react";
import { rem } from "../../../../styles/font";
import { ListItem007 } from "./index";

const meta: Meta<typeof ListItem007> = {
  title: "Basic/ListItem/Product007",
  component: ListItem007,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof ListItem007> = (args) => (
  <ul style={{ padding: "20px", margin: 0, listStyle: "none" }}>
    <ListItem007 {...args} />
  </ul>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <p style={{ fontSize: rem(24) }}>
      "これはシンプルなリストアイテムです。長いテキストでも改行されて表示されます。"
    </p>
  ),
  onClick: () => alert("クリックされました！")
};

export const WithCustomAppearance: StoryFn<typeof ListItem007> = (args) => (
  <ul
    style={{ padding: "20px", margin: 0, listStyle: "none", fontSize: rem(18) }}
  >
    <ListItem007 {...args} />
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
    animationColor: "#0066cc"
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
