import type { Meta, StoryFn } from "@storybook/react";
import { CheckBox001 } from "./index";

export default {
  title: "Basic/CheckBox/Product001",
  component: CheckBox001,
  tags: ["autodocs"]
} as Meta<typeof CheckBox001>;

const Template: StoryFn<typeof CheckBox001> = (args) => (
  <div style={{ width: "300px" }}>
    <CheckBox001 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  id: "checkbox-001",
  type: "001",
  size: "middle",
  style: {
    backgroundColor: "#fff",
    borderColor: "#000",
    checkedBackgroundColor: "#411fe6",
    markColor: "#fff"
  }
};
