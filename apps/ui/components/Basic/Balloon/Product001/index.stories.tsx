import type { Meta, StoryFn } from "@storybook/react";
import { Balloon001 } from "./index";

export default {
  title: "Basic/Balloon/Product001",
  component: Balloon001,
  tags: ["autodocs"]
} as Meta<typeof Balloon001>;

const Template: StoryFn<typeof Balloon001> = (args) => (
  <div style={{ width: "300px" }}>
    <Balloon001 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Balloon",
  type: "001",
  style: {
    backgroundColor: "#ccc",
    color: "#000",
    fontSize: 16
  }
};
