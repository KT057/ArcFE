import type { Meta, StoryFn } from "@storybook/react";
import { FrameNumber001 } from "./index";

export default {
  title: "Basic/FrameNumber/Product001",
  component: FrameNumber001,
  tags: ["autodocs"]
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

export const Type002 = Template.bind({});
Type002.args = {
  number: 5,
  type: "002",
  size: "middle",
  style: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000"
  }
};

export const Type003 = Template.bind({});
Type003.args = {
  number: 8,
  type: "003",
  size: "middle",
  style: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000"
  }
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  number: 1,
  type: "001",
  size: "small",
  style: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000"
  }
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  number: 9,
  type: "001",
  size: "large",
  style: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000"
  }
};

export const RedTheme = Template.bind({});
RedTheme.args = {
  number: 3,
  type: "001",
  size: "middle",
  style: {
    backgroundColor: "#ff4444",
    borderColor: "#cc0000",
    color: "#fff"
  }
};

export const BlueTheme = Template.bind({});
BlueTheme.args = {
  number: 7,
  type: "002",
  size: "middle",
  style: {
    backgroundColor: "#4444ff",
    borderColor: "#0000cc",
    color: "#fff"
  }
};

export const GreenTheme = Template.bind({});
GreenTheme.args = {
  number: 4,
  type: "003",
  size: "middle",
  style: {
    backgroundColor: "#44ff44",
    borderColor: "#00cc00",
    color: "#000"
  }
};

export const HighNumber = Template.bind({});
HighNumber.args = {
  number: 99,
  type: "001",
  size: "middle",
  style: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000"
  }
};

export const ZeroNumber = Template.bind({});
ZeroNumber.args = {
  number: 0,
  type: "002",
  size: "middle",
  style: {
    backgroundColor: "#f0f0f0",
    borderColor: "#666",
    color: "#666"
  }
};
