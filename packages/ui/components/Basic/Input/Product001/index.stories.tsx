import type { Meta, StoryFn } from "@storybook/react";
import { Input001 } from "./index";

const meta: Meta<typeof Input001> = {
  title: "Basic/Input/Product001",
  component: Input001,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof Input001> = (args) => (
  <div style={{ width: "300px" }}>
    <Input001 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "001",
  size: "middle",
  placeholder: "入力してください",
  name: "input-001"
};
