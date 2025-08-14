import type { Meta, StoryFn } from "@storybook/react";
import { FrameNumber001 } from "./index";

export default {
  title: "Basic/FrameNumber/Product001",
  component: FrameNumber001
} as Meta<typeof FrameNumber001>;

const Template: StoryFn<typeof FrameNumber001> = (args) => (
  <div style={{ width: "300px" }}>
    <FrameNumber001 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  number: 2,
  type: "001",
  size: "middle",
  style: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000"
  }
};
