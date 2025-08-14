import type { Meta, StoryFn } from "@storybook/react";
import { Svg040Icon } from "../../Icons";
import { TextIcon001 } from "./index";

const meta: Meta<typeof TextIcon001> = {
  title: "Basic/TextIcon/Product001",
  component: TextIcon001
};

export default meta;

const Template: StoryFn<typeof TextIcon001> = (args) => (
  <TextIcon001 {...args} />
);

export const IconRight = Template.bind({});
IconRight.args = {
  icon: <Svg040Icon />,
  iconPosition: "right",
  children: "Text"
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  icon: <Svg040Icon />,
  iconPosition: "left",
  children: "Text"
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  icon: <Svg040Icon />,
  iconPosition: "right",
  children: "カスタムスタイルテキスト",
  iconSize: "large",
  style: {
    fontSize: 20,
    color: "#2196f3",
    iconColor: "#ff5722",
    gap: 8
  }
};
