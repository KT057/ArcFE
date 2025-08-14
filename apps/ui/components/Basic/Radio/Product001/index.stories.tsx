import type { Meta, StoryFn } from "@storybook/react";
import { Radio001 } from "./index";

const meta: Meta<typeof Radio001> = {
  title: "Basic/Radio/Product001",
  component: Radio001,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof Radio001> = (args) => (
  <div style={{ padding: "20px" }}>
    <Radio001 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  id: "radio-001",
  children: "カスタマイズされたラジオボタン",
  style: {
    fontSize: 20,
    color: "#000",
    checkboxStyle: {
      backgroundColor: "#fff",
      borderColor: "#000",
      checkedBackgroundColor: "#000",
      markColor: "#fff"
    }
  }
};
