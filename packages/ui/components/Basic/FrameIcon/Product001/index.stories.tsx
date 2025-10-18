import type { Meta, StoryFn } from "@storybook/react";
import { Svg001Icon } from "../../Icons";
import { FrameIcon001 } from "./index";

export default {
  title: "Basic/FrameIcon/Product001",
  component: FrameIcon001,
  tags: ["autodocs"]
} as Meta<typeof FrameIcon001>;

const Template: StoryFn<typeof FrameIcon001> = (args) => (
  <div style={{ width: "300px" }}>
    <FrameIcon001 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  icon: <Svg001Icon />,
  type: "001",
  size: "middle",
  style: {
    backgroundColor: "#fff",
    borderColor: "#000",
    iconColor: "#000"
  }
};
