import type { Meta, StoryFn } from "@storybook/react";
import { Input003 } from "./index";

const meta: Meta<typeof Input003> = {
  title: "Basic/Input/Product003",
  component: Input003,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof Input003> = (args) => (
  <div style={{ width: "300px" }}>
    <Input003 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: "middle",
  placeholder: "入力してください",
  name: "input-003"
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  size: "middle",
  placeholder: "メールアドレスを入力",
  name: "email",
  label: "メールアドレス",
  inputType: "email",
  autoComplete: "email"
};

export const WithError = Template.bind({});
WithError.args = {
  size: "middle",
  placeholder: "パスワードを入力",
  name: "password",
  label: "パスワード",
  inputType: "password",
  error: true,
  errorText: "パスワードは8文字以上で入力してください"
};

export const CustomAppearance = Template.bind({});
CustomAppearance.args = {
  size: "large",
  placeholder: "カスタムスタイル",
  name: "custom",
  label: "カスタム入力",
  appearance: {
    fontSize: 20,
    color: "#333",
    borderColor: "#999",
    backgroundColor: "#f5f5f5",
    placeholderColor: "#aaa",
    errorColor: "#d00",
    errorFontSize: 14,
    labelFontSize: 18,
    labelColor: "#555",
    labelFontWeight: "bold",
    labelMarginBottom: 8,
    focusRingColor: "#28a745"
  }
};
