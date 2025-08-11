import type { Meta, StoryFn } from "@storybook/react";
import { Input005 } from "./index";

const meta: Meta<typeof Input005> = {
  title: "Basic/Input/Product005",
  component: Input005
};

export default meta;

const Template: StoryFn<typeof Input005> = (args) => (
  <div style={{ width: "300px" }}>
    <Input005 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "001",
  size: "middle",
  placeholder: "入力してください",
  name: "input-005"
};