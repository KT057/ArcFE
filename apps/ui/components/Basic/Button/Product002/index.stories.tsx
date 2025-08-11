import type { Meta, StoryFn } from "@storybook/react";
import { Svg002Icon } from "../../Icons";
import { Button002 } from "./index";

export default {
  title: "Basic/Button/Product002",
  component: Button002
} as Meta<typeof Button002>;

const Template: StoryFn<typeof Button002> = (args) => (
  <div style={{ width: "300px" }}>
    <Button002 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  icon: <Svg002Icon />,
  animation: {
    type: "004",
    duration: 0.25,
    easing: "easeInOutCubic",
    backgroundColor: "#000",
    textColor: "#fff"
  },
  type: "001",
  size: "middle",
  style: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000",
    fontWeight: 700
  }
};
