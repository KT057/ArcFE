import type { Meta, StoryFn } from "@storybook/react";
import { rem } from "../../../../styles/font";
import { FrameNumber001 } from "../../FrameNumber/Product001";
import { ListItem006 } from "./index";

const meta: Meta<typeof ListItem006> = {
  title: "Basic/ListItem/Product006",
  component: ListItem006,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof ListItem006> = (args) => (
  <ul style={{ padding: "20px", margin: 0, listStyle: "none" }}>
    <ListItem006 {...args} />
  </ul>
);

export const Default = Template.bind({});
Default.args = {
  frameNumber: <FrameNumber001 number={1} type="001" size="small" />,
  children: (
    <p style={{ fontSize: rem(24) }}>
      "これはフレーム番号付きのリストアイテムです。長いテキストでも改行されて表示されます。"
    </p>
  ),
  onClick: () => alert("クリックされました！")
};

export const WithCustomAppearance: StoryFn<typeof ListItem006> = (args) => (
  <ul style={{ padding: "20px", margin: 0, listStyle: "none" }}>
    <ListItem006 {...args} />
  </ul>
);
WithCustomAppearance.args = {
  frameNumber: <FrameNumber001 number={2} type="002" size="small" />,
  children: (
    <p style={{ fontSize: rem(18) }}>
      "カスタムスタイルを適用したリストアイテムです。"
    </p>
  ),
  appearance: {
    color: "#333",
    gap: 30,
    animationOpacity: 0.7
  },
  onClick: () => alert("クリックされました！")
};

export const NonClickable = Template.bind({});
NonClickable.args = {
  frameNumber: <FrameNumber001 number={3} type="003" size="small" />,
  children: (
    <p style={{ fontSize: rem(24) }}>
      "クリック不可のリストアイテムです。ホバーしても変化しません。"
    </p>
  ),
  onClick: undefined
};

export const AsArticle = Template.bind({});
AsArticle.args = {
  as: "article",
  frameNumber: <FrameNumber001 number={4} type="001" size="small" />,
  children: (
    <p style={{ fontSize: rem(24) }}>
      "articleタグとしてレンダリングされるリストアイテムです。"
    </p>
  ),
  onClick: () => alert("クリックされました！")
};

export const WithFrameNumberPaddingTop = Template.bind({});
WithFrameNumberPaddingTop.args = {
  frameNumber: <FrameNumber001 number={5} type="001" size="small" />,
  children: (
    <p style={{ fontSize: rem(24) }}>
      "フレーム番号に上部パディングを追加した例です。複数行のテキストの場合に便利です。これは長いテキストの例です。"
    </p>
  ),
  appearance: {
    frameNumberPaddingTop: 4
  },
  onClick: () => alert("クリックされました！")
};
