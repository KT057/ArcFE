import type { Meta, StoryFn } from "@storybook/react";
import { Input002 } from "./index";

const meta: Meta<typeof Input002> = {
  title: "Basic/Input/Product002",
  component: Input002
};

export default meta;

const Template: StoryFn<typeof Input002> = (args) => (
  <div style={{ width: "300px" }}>
    <Input002 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: "middle",
  placeholder: "入力してください",
  name: "input-002"
};
