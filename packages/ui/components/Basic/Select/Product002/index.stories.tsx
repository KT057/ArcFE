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

export const Variant001 = Template.bind({});
Variant001.args = {
  variant: "001",
  name: "select-002",
  value: "",
  placeholder: "選択してください",
  label: "好きな色",
  options: [
    { value: "option1", label: "オプション1" },
    { value: "option2", label: "オプション2" },
    { value: "option3", label: "オプション3" }
  ],
  icon: <Svg034Icon />
};

export const Variant002 = Template.bind({});
Variant002.args = {
  variant: "002",
  name: "select-002",
  placeholder: "都道府県を選択",
  label: "都道府県",
  options: [
    { value: "tokyo", label: "東京都" },
    { value: "osaka", label: "大阪府" },
    { value: "hokkaido", label: "北海道" }
  ],
  icon: <Svg034Icon />
};

export const NoPlaceholder = Template.bind({});
NoPlaceholder.args = {
  variant: "001",
  name: "select-002",
  label: "好きな色",
  options: [
    { value: "", label: "選択してください" },
    { value: "option1", label: "オプション1" },
    { value: "option2", label: "オプション2" },
    { value: "option3", label: "オプション3" }
  ],
  icon: <Svg034Icon />
};

export const WithError = Template.bind({});
WithError.args = {
  variant: "001",
  name: "select-error",
  placeholder: "選択してください",
  label: "選択必須",
  errorText: "※ 項目を選択してください。",
  options: [
    { value: "a", label: "A" },
    { value: "b", label: "B" }
  ],
  icon: <Svg034Icon />
};

export const CustomAppearance = Template.bind({});
CustomAppearance.args = {
  variant: "002",
  name: "select-custom",
  placeholder: "担当者を選択",
  label: "担当者",
  appearance: {
    fontSize: 18,
    color: "#1f2933",
    borderColor: "#2563eb",
    backgroundColor: "#f8fafc",
    placeholderColor: "#94a3b8",
    focusRingColor: "rgba(37, 99, 235, 0.45)",
    errorColor: "#ef4444",
    errorFontSize: 14,
    labelFontSize: 16,
    labelColor: "#0f172a",
    labelFontWeight: 600,
    labelMarginBottom: 6,
    iconColor: "#2563eb"
  },
  options: [
    { value: "member1", label: "田中 太郎" },
    { value: "member2", label: "佐藤 花子" },
    { value: "member3", label: "鈴木 次郎" }
  ],
  icon: <Svg034Icon />
};
