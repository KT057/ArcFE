import type { Meta, StoryFn } from "@storybook/react";
import { TextField005 } from "./index";

const meta: Meta<typeof TextField005> = {
  title: "Basic/TextField/Product005",
  component: TextField005
};

export default meta;

const Template: StoryFn<typeof TextField005> = (args) => (
  <div style={{ padding: "20px", maxWidth: "400px" }}>
    <TextField005 {...args} />
  </div>
);

export const Type001 = Template.bind({});
Type001.args = {
  type: "001",
  name: "text-field-005",
  placeholder: "入力してください"
};

export const Type002 = Template.bind({});
Type002.args = {
  type: "002",
  name: "text-field-005",
  placeholder: "入力してください"
};

export const WithError = Template.bind({});
WithError.args = {
  type: "001",
  name: "text-field-error",
  placeholder: "入力してください",
  errorText: "※ 必須項目に入力してください。"
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  type: "002",
  name: "text-field-custom",
  placeholder: "カスタムスタイル（全ボーダー背景色付き）",
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
