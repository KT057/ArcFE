import type { Meta, StoryFn } from "@storybook/react";
import { Svg034Icon } from "../../Icons";
import { Select002 } from "./index";

const meta: Meta<typeof Select002> = {
  title: "Basic/Select/Product002",
  component: Select002,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof Select002> = (args) => (
  <div style={{ width: "300px" }}>
    <Select002 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  name: "select-002",
  placeholder: "選択してください",
  options: [
    { value: "option1", label: "オプション1" },
    { value: "option2", label: "オプション2" },
    { value: "option3", label: "オプション3" }
  ],
  icon: <Svg034Icon />
};
