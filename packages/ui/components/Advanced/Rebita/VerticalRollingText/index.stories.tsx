import type { Meta, StoryFn } from "@storybook/react";
import { VerticalRollingText } from "./index";

const meta: Meta<typeof VerticalRollingText> = {
  title: "Advanced/Rebita/VerticalRollingText",
  component: VerticalRollingText,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof VerticalRollingText> = (args) => (
  <div
    style={{
      padding: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <VerticalRollingText {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Hover to see animation"
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  children: "Custom Text",
  appearance: {
    fontSize: 20,
    color: "#2196f3"
  }
};

export const NoHover = Template.bind({});
NoHover.args = {
  children: "No hover effect",
  enableHover: false
};

export const LongText = Template.bind({});
LongText.args = {
  children: "This is a longer text to test the animation"
};
