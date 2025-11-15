import type { Meta, StoryFn } from "@storybook/react";
import { rem } from "../../../../styles";
import { Svg040Icon } from "../../Icons";
import { TextButton001 } from "./index";

const meta: Meta<typeof TextButton001> = {
  title: "Basic/TextButton/Product001",
  component: TextButton001,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof TextButton001> = (args) => (
  <div style={{ padding: "20px", color: "#333", fontSize: rem(18) }}>
    <TextButton001 {...args} />
  </div>
);

export const Type001 = Template.bind({});
Type001.args = {
  type: "001",
  children: "Text Button Component",
  appearance: {
    hoverColor: "#ff5722",
    hoverDuration: "0.5s",
    hoverEase: "easeInOutCubic"
  }
};

export const Type002 = Template.bind({});
Type002.args = {
  type: "002",
  children: "Text Button Component",
  style: {
    width: "auto",
    display: "inline-block"
  }
};

export const ButtonElement = Template.bind({});
ButtonElement.args = {
  type: "001",
  as: "button",
  children: "Button Element",
  onClick: () => alert("Button clicked!")
};

export const LinkElement = Template.bind({});
LinkElement.args = {
  type: "002",
  as: "a",
  href: "#",
  children: "Link Element",
  style: {
    width: "auto",
    display: "inline-block"
  }
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  type: "002",
  children: "Custom Style",
  appearance: {
    hoverColor: "#ff5722",
    hoverDuration: "0.5s"
  }
};

export const ButtonWithIconRight = Template.bind({});
ButtonWithIconRight.args = {
  type: "001",
  as: "button",
  children: "ボタン",
  icon: (
    <div style={{ width: rem(24), lineHeight: 0, color: "#2196f3" }}>
      <Svg040Icon />
    </div>
  ),
  iconPosition: "right",
  appearance: {
    gap: 8,
    hoverColor: "#2196f3"
  },
  onClick: () => alert("Button clicked!")
};

export const ButtonWithIconLeft = Template.bind({});
ButtonWithIconLeft.args = {
  type: "001",
  as: "button",
  children: "ボタン",
  icon: (
    <div style={{ width: rem(24), lineHeight: 0, color: "#2196f3" }}>
      <Svg040Icon />
    </div>
  ),
  iconPosition: "left",
  appearance: {
    gap: 8,
    hoverColor: "#2196f3"
  },
  onClick: () => alert("Button clicked!")
};

export const LinkWithIconRight = Template.bind({});
LinkWithIconRight.args = {
  type: "002",
  as: "a",
  href: "#",
  children: "リンク",
  icon: (
    <div style={{ width: rem(24), lineHeight: 0, color: "#2196f3" }}>
      <Svg040Icon />
    </div>
  ),
  iconPosition: "right",
  appearance: {
    gap: 8,
    hoverColor: "#ff5722"
  }
};

export const LinkWithIconLeft = Template.bind({});
LinkWithIconLeft.args = {
  type: "002",
  as: "a",
  href: "#",
  children: "リンク",
  icon: (
    <div style={{ width: rem(24), lineHeight: 0, color: "#ff5722" }}>
      <Svg040Icon />
    </div>
  ),
  iconPosition: "left",
  appearance: {
    gap: 8,
    hoverColor: "#ff5722"
  }
};

export const WithCustomGap = Template.bind({});
WithCustomGap.args = {
  type: "001",
  as: "button",
  children: "カスタムギャップ",
  icon: (
    <div style={{ width: rem(24), lineHeight: 0, color: "#2196f3" }}>
      <Svg040Icon />
    </div>
  ),
  iconPosition: "right"
};

export const WithPaddingTop = Template.bind({});
WithPaddingTop.args = {
  type: "001",
  as: "button",
  children: "パディングトップ指定",
  icon: (
    <div style={{ width: rem(24), lineHeight: 0, color: "#2196f3" }}>
      <Svg040Icon />
    </div>
  ),
  iconPosition: "right",
  appearance: {
    gap: 8,
    paddingTop: 2,
    hoverColor: "#2196f3"
  }
};
