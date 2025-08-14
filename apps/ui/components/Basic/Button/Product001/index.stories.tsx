import type { Meta, StoryFn } from "@storybook/react";
import { Button001 } from "./index";

export default {
  title: "Basic/Button/Product001",
  component: Button001,
  tags: ["autodocs"]
} as Meta<typeof Button001>;

const Template: StoryFn<typeof Button001> = (args) => (
  <div style={{ width: "300px" }}>
    <Button001 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  animation: {
    type: "001",
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
