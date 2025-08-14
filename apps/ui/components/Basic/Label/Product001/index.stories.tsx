import type { Meta, StoryFn } from "@storybook/react";
import { Label001 } from "./index";

const meta: Meta<typeof Label001> = {
  title: "Basic/Label/Product001",
  component: Label001
};

export default meta;

const Template: StoryFn<typeof Label001> = (args) => (
  <div style={{ padding: "20px" }}>
    <Label001 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "001",
  size: "middle",
  children: "ラベル"
};
