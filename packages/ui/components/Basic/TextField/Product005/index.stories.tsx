import type { Meta, StoryFn } from "@storybook/react";
import { TextField005 } from "./index";

const meta: Meta<typeof TextField005> = {
  title: "Basic/TextField/Product005",
  component: TextField005,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof TextField005> = (args) => (
  <div style={{ padding: "20px", maxWidth: "400px" }}>
    <TextField005 {...args} />
  </div>
);

export const Variant001 = Template.bind({});
Variant001.args = {
  variant: "001",
  name: "text-field-005",
  placeholder: "入力してください"
};

export const Variant002 = Template.bind({});
Variant002.args = {
  variant: "002",
  name: "text-field-005",
  placeholder: "入力してください"
};

export const WithError = Template.bind({});
WithError.args = {
  variant: "001",
  name: "text-field-error",
  placeholder: "入力してください",
  errorText: "※ 必須項目に入力してください。"
};

export const CustomAppearance = Template.bind({});
CustomAppearance.args = {
  variant: "002",
  name: "text-field-custom",
  placeholder: "カスタムスタイル（全ボーダー背景色付き）",
  label: "カスタムフィールド",
  appearance: {
    fontSize: 16,
    color: "#333",
    borderColor: "#2196f3",
    backgroundColor: "#f5f5f5",
    placeholderColor: "#999",
    errorFontSize: 14,
    errorColor: "#ff5722",
    errorBackgroundColor: "#ffebee",
    errorBorderColor: "#ff5722",
    labelFontSize: 14,
    labelColor: "#666",
    focusRingColor: "#2196f3"
  }
};
