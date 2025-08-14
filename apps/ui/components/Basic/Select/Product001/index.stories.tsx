import type { Meta, StoryFn } from "@storybook/react";
import { Svg034Icon } from "../../Icons";
import { Select001 } from "./index";

const meta: Meta<typeof Select001> = {
  title: "Basic/Select/Product001",
  component: Select001
};

export default meta;

const Template: StoryFn<typeof Select001> = (args) => (
  <div style={{ width: "300px" }}>
    <Select001 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "001",
  name: "select-001",
  placeholder: "選択してください",
  options: [
    { value: "option1", label: "オプション1" },
    { value: "option2", label: "オプション2" },
    { value: "option3", label: "オプション3" }
  ],
  icon: <Svg034Icon />
};
