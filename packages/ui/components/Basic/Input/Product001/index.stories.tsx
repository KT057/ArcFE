import type { Meta, StoryFn } from "@storybook/react";
import { Input001 } from "./index";

const meta: Meta<typeof Input001> = {
  title: "Basic/Input/Product001",
  component: Input001,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof Input001> = (args) => (
  <div style={{ width: "300px" }}>
    <Input001 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  variant: "001",
  size: "middle",
  placeholder: "入力してください",
  name: "input-001"
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  variant: "001",
  size: "middle",
  placeholder: "メールアドレスを入力",
  name: "email",
  label: "メールアドレス",
  inputType: "email",
  autoComplete: "email"
};

export const WithError = Template.bind({});
WithError.args = {
  variant: "001",
  size: "middle",
  placeholder: "パスワードを入力",
  name: "password",
  label: "パスワード",
  inputType: "password",
  error: true,
  errorText: "パスワードは8文字以上で入力してください"
};

export const RoundedVariant = Template.bind({});
RoundedVariant.args = {
  variant: "002",
  size: "middle",
  placeholder: "検索キーワード",
  name: "search",
  inputType: "search",
  ariaLabel: "検索"
};

export const CustomAppearance = Template.bind({});
CustomAppearance.args = {
  variant: "001",
  size: "large",
  placeholder: "カスタムスタイル",
  name: "custom",
  label: "カスタム入力",
  appearance: {
    fontSize: 20,
    color: "#333",
    borderColor: "#999",
    placeholderColor: "#aaa",
    errorColor: "#d00",
    errorFontSize: 14,
    labelFontSize: 18,
    labelColor: "#555",
    labelFontWeight: "bold",
    labelMarginBottom: 8
  }
};
