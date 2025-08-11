import type { Meta, StoryFn } from "@storybook/react";
import { Svg034Icon } from "../../Icons";
import { Input006 } from "./index";

const meta: Meta<typeof Input006> = {
  title: "Basic/Input/Product006",
  component: Input006
};

export default meta;

const Template: StoryFn<typeof Input006> = (args) => (
  <div style={{ width: "300px" }}>
    <Input006 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "001",
  size: "middle",
  placeholder: "入力してください",
  name: "input-006",
  iconPosition: "right",
  icon: <Svg034Icon />
};
