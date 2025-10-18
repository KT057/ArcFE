import type { Meta, StoryFn } from "@storybook/react";
import { Svg031Icon } from "../../Icons";
import { Label002 } from "./index";

const meta: Meta<typeof Label002> = {
  title: "Basic/Label/Product002",
  component: Label002,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof Label002> = (args) => (
  <div style={{ padding: "20px" }}>
    <Label002 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "001",
  size: "middle",
  iconPosition: "left",
  icon: <Svg031Icon />,
  children: "ラベル"
};
