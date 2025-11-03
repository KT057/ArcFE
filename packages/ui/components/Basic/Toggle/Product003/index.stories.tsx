import type { Meta, StoryFn } from "@storybook/react";
import { Toggle003 } from "./index";

const meta: Meta<typeof Toggle003> = {
  title: "Basic/Toggle/Product003",
  component: Toggle003,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof Toggle003> = (args) => (
  <div style={{ padding: "50px" }}>
    <Toggle003 {...args} />
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
    backgroundColor: "#000"
  }
};
