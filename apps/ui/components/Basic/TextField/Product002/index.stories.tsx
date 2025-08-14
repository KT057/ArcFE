import type { Meta, StoryFn } from "@storybook/react";
import { TextField002 } from "./index";

const meta: Meta<typeof TextField002> = {
  title: "Basic/TextField/Product002",
  component: TextField002
};

export default meta;

const Template: StoryFn<typeof TextField002> = (args) => (
  <div style={{ padding: "20px", maxWidth: "400px" }}>
    <TextField002 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  name: "text-field-002",
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
  placeholder: "カスタムスタイル（下線のみ）",
  style: {
    fontSize: 16,
    color: "#333",
    borderColor: "#2196f3",
    placeholderColor: "#999",
    errorStyle: {
      fontSize: 14,
      color: "#ff5722",
      borderColor: "#ff5722"
    }
  }
};
