import type { Meta, StoryFn } from "@storybook/react";
import { Input004 } from "./index";

const meta: Meta<typeof Input004> = {
  title: "Basic/Input/Product004",
  component: Input004,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof Input004> = (args) => (
  <div style={{ width: "300px" }}>
    <Input004 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "001",
  size: "middle",
  placeholder: "入力してください",
  name: "input-004"
};
