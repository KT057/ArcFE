import type { Meta, StoryFn } from "@storybook/react";
import { JmcArrowButton } from "./index";

const meta: Meta<typeof JmcArrowButton> = {
  title: "Advanced/Jmc/ArrowButton",
  component: JmcArrowButton
};

export default meta;

const Template: StoryFn<typeof JmcArrowButton> = (args) => (
  <div
    style={{
      padding: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <JmcArrowButton {...args} />
  </div>
);

export const Large = Template.bind({});
Large.args = {
  size: "large"
};

export const Middle = Template.bind({});
Middle.args = {
  size: "middle"
};

export const Small = Template.bind({});
Small.args = {
  size: "small"
};

export const ButtonElement = Template.bind({});
ButtonElement.args = {
  size: "middle",
  as: "button",
  onClick: () => alert("Arrow button clicked!")
};

export const LinkElement = Template.bind({});
LinkElement.args = {
  size: "middle",
  as: "a",
  href: "#"
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  size: "middle",
  style: {
    iconColor: "#2196f3",
    borderColor: "#2196f3",
    backgroundColor: "#f5f5f5",
    hoverIconColor: "#ffffff",
    hoverBorderColor: "#1976d2",
    hoverBackgroundColor: "#1976d2"
  }
};
