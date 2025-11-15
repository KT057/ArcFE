import type { Meta, StoryFn } from "@storybook/react";
import { Svg034Icon } from "../../Icons";
import { Input006 } from "./index";

const meta: Meta<typeof Input006> = {
  title: "Basic/Input/Product006",
  component: Input006,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof Input006> = (args) => (
  <div style={{ width: "300px" }}>
    <Input006 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  variant: "001",
  size: "middle",
  placeholder: "入力してください",
  name: "input-006",
  iconPosition: "right",
  icon: <Svg034Icon />
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  variant: "001",
  size: "middle",
  placeholder: "検索キーワード",
  name: "search",
  label: "検索",
  inputType: "search",
  iconPosition: "right",
  icon: <Svg034Icon />
};

export const WithError = Template.bind({});
WithError.args = {
  variant: "001",
  size: "middle",
  placeholder: "メールアドレスを入力",
  name: "email",
  label: "メールアドレス",
  inputType: "email",
  error: true,
  errorText: "有効なメールアドレスを入力してください",
  iconPosition: "right",
  icon: <Svg034Icon />
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  variant: "001",
  size: "middle",
  placeholder: "検索",
  name: "search",
  inputType: "search",
  iconPosition: "left",
  icon: <Svg034Icon />,
  ariaLabel: "検索"
};

export const RoundedVariant = Template.bind({});
RoundedVariant.args = {
  variant: "002",
  size: "middle",
  placeholder: "検索キーワード",
  name: "search",
  inputType: "search",
  iconPosition: "right",
  icon: <Svg034Icon />,
  ariaLabel: "検索"
};

export const CustomAppearance = Template.bind({});
CustomAppearance.args = {
  variant: "001",
  size: "large",
  placeholder: "カスタムスタイル",
  name: "custom",
  label: "カスタム検索",
  iconPosition: "right",
  icon: <Svg034Icon />,
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
