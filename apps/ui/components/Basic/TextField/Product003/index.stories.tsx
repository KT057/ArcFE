import type { Meta, StoryFn } from "@storybook/react";
import { TextField003 } from "./index";

const meta: Meta<typeof TextField003> = {
  title: "Basic/TextField/Product003",
  component: TextField003
};

export default meta;

const Template: StoryFn<typeof TextField003> = (args) => (
  <div style={{ padding: "20px", maxWidth: "400px" }}>
    <TextField003 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  name: "text-field-003",
  placeholder: "入力してください"
};

export const WithError = Template.bind({});
WithError.args = {
  name: "text-field-error",
  placeholder: "入力してください",
  errorText: "※ 必須項目に入力してください。"
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  name: "text-field-custom",
  placeholder: "カスタムスタイル（背景色付き）",
  style: {
    fontSize: 16,
    color: "#333",
    borderColor: "#2196f3",
    backgroundColor: "#f5f5f5",
    placeholderColor: "#999",
    errorStyle: {
      fontSize: 14,
      color: "#ff5722",
      backgroundColor: "#ffebee"
    }
  }
};