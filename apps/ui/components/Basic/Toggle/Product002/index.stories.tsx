import type { Meta, StoryFn } from "@storybook/react";
import { Toggle002 } from "./index";

const meta: Meta<typeof Toggle002> = {
  title: "Basic/Toggle/Product002",
  component: Toggle002
};

export default meta;

const Template: StoryFn<typeof Toggle002> = (args) => (
  <div style={{ padding: "50px" }}>
    <Toggle002 {...args} />
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
    lineColor: "#2196f3"
  }
};
