import type { Meta, StoryFn } from "@storybook/react";
import { Toggle001 } from "./index";

const meta: Meta<typeof Toggle001> = {
  title: "Basic/Toggle/Product001",
  component: Toggle001,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "fixed"
    }
  }
};

export default meta;

const Template: StoryFn<typeof Toggle001> = (args) => (
  <div style={{ padding: "50px" }}>
    <Toggle001 {...args} />
  </div>
);

export const OpenState = Template.bind({});
OpenState.args = {
  isOpen: false
};

export const CloseState = Template.bind({});
CloseState.args = {
  isOpen: true
};

export const Interactive = Template.bind({});
Interactive.args = {};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  style: {
    lineColor: "#2196f3",
    animationBackgroundColorLine: "#ffeb3b",
    animationBackgroundColorBefore: "#e3f2fd",
    animationBackgroundColorAfter: "#f5f5f5"
  }
};
