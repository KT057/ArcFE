import type { Meta, StoryFn } from "@storybook/react";
import { CheckBox002 } from "./index";

export default {
  title: "Basic/CheckBox/Product002",
  component: CheckBox002
} as Meta<typeof CheckBox002>;

const Template: StoryFn<typeof CheckBox002> = (args) => (
  <div style={{ width: "300px" }}>
    <CheckBox002 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  id: "checkbox-001",
  size: "middle",
  style: {
    backgroundColor: "#ccc",
    borderColor: "#000",
    checkedBackgroundColor: "#411fe6",
    markColor: "#fff"
  }
};
