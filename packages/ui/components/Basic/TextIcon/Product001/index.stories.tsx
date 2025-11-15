import type { Meta, StoryFn } from "@storybook/react";
import { rem } from "../../../../styles";
import { Svg040Icon } from "../../Icons";
import { TextIcon001 } from "./index";

const meta: Meta<typeof TextIcon001> = {
  title: "Basic/TextIcon/Product001",
  component: TextIcon001,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof TextIcon001> = (args) => (
  <div style={{ fontSize: rem(24), color: "#000" }}>
    <TextIcon001 {...args}>{args.children}</TextIcon001>
  </div>
);

export const IconRight = Template.bind({});
IconRight.args = {
  icon: (
    <div style={{ width: rem(20), lineHeight: 0, color: "#2196f3" }}>
      <Svg040Icon />
    </div>
  ),
  iconPosition: "right",
  children: "Text"
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  icon: (
    <div style={{ width: rem(20), lineHeight: 0, color: "#2196f3" }}>
      <Svg040Icon />
    </div>
  ),
  iconPosition: "left",
  children: "Text"
};

export const CustomGap = Template.bind({});
CustomGap.args = {
  icon: (
    <div style={{ width: rem(20), lineHeight: 0, color: "#2196f3" }}>
      <Svg040Icon />
    </div>
  ),
  iconPosition: "right",
  children: "カスタムギャップ",
  appearance: {
    gap: 8
  }
};

export const InheritParentStyle = Template.bind({});
InheritParentStyle.decorators = [
  (Story) => (
    <div style={{ fontSize: rem(20), lineHeight: 0, color: "#2196f3" }}>
      <Story />
    </div>
  )
];
InheritParentStyle.args = {
  icon: (
    <div style={{ width: rem(20), lineHeight: 0, color: "#2196f3" }}>
      <Svg040Icon />
    </div>
  ),
  iconPosition: "right",
  children: "親のスタイルを継承"
};

export const WithPaddingTop = Template.bind({});
WithPaddingTop.args = {
  icon: (
    <div style={{ width: rem(20), lineHeight: 0, color: "#2196f3" }}>
      <Svg040Icon />
    </div>
  ),
  iconPosition: "right",
  children: "パディングトップ指定",
  appearance: {
    paddingTop: 10
  }
};
