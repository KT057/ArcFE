import type { Meta, StoryFn } from "@storybook/react";
import { TextField001 } from "./index";

const meta: Meta<typeof TextField001> = {
  title: "Basic/TextField/Product001",
  component: TextField001,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof TextField001> = (args) => (
  <div style={{ padding: "20px", maxWidth: "400px" }}>
    <TextField001 {...args} />
  </div>
);

export const Variant001 = Template.bind({});
Variant001.args = {
  variant: "001",
  name: "text-field-001",
  placeholder: "内容を入力してください"
};

export const Variant002 = Template.bind({});
Variant002.args = {
  variant: "002",
  name: "text-field-002",
  placeholder: "補足情報を入力してください",
  label: "補足情報",
  appearance: {
    labelFontWeight: 600
  }
};

export const WithError = Template.bind({});
WithError.args = {
  variant: "001",
  name: "text-field-error",
  placeholder: "入力してください",
  label: "コメント",
  errorText: "※ 必須項目に入力してください。"
};

export const CustomAppearance = Template.bind({});
CustomAppearance.args = {
  variant: "002",
  name: "text-field-custom",
  placeholder: "カスタムスタイル",
  label: "備考",
  appearance: {
    fontSize: 16,
    lineHeight: 1.8,
    color: "#333",
    borderColor: "#2196f3",
    placeholderColor: "#999",
    focusRingColor: "rgba(33, 150, 243, 0.5)",
    errorColor: "#ff5722",
    errorFontSize: 14,
    errorBorderColor: "#ff5722",
    labelFontSize: 18,
    labelColor: "#1f2933",
    labelFontWeight: "bold",
    labelMarginBottom: 8
  }
};
