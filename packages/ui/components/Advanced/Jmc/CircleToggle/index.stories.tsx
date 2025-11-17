import type { Meta, StoryFn } from "@storybook/react";
import { JmcCircleToggle } from "./index";

const meta: Meta<typeof JmcCircleToggle> = {
  title: "Advanced/Jmc/CircleToggle",
  component: JmcCircleToggle,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof JmcCircleToggle> = (args) => (
  <div
    style={{
      padding: "50px",
      backgroundColor: "#333",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <JmcCircleToggle {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Hovered = Template.bind({});
Hovered.args = {
  isHovered: true
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  appearance: {
    color: "#2196f3",
    dotColor: "#2196f3"
  }
};

export const CustomColorsHovered = Template.bind({});
CustomColorsHovered.args = {
  isHovered: true,
  appearance: {
    color: "#2196f3",
    dotColor: "#2196f3"
  }
};

export const Interactive = Template.bind({});
Interactive.args = {
  onClick: () => alert("Circle toggle clicked!")
};
