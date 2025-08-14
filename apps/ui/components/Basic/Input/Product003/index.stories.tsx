import type { Meta, StoryFn } from "@storybook/react";
import { Input003 } from "./index";

const meta: Meta<typeof Input003> = {
  title: "Basic/Input/Product003",
  component: Input003,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof Input003> = (args) => (
  <div style={{ width: "300px" }}>
    <Input003 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: "middle",
  placeholder: "入力してください",
  name: "input-003"
};
