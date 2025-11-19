import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { CheckBox002 } from "./index";

const meta: Meta<typeof CheckBox002> = {
  title: "Basic/CheckBox/Product002",
  component: CheckBox002,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof CheckBox002> = (args) => {
  const [checked, setChecked] = useState(args.checked || false);

  return (
    <div style={{ width: "300px" }}>
      <CheckBox002
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: "checkbox-001",
  size: "middle",
  appearance: {
    backgroundColor: "#ccc",
    borderColor: "#000",
    checkedBackgroundColor: "#411fe6",
    markColor: "#fff"
  }
};

export const Checked = Template.bind({});
Checked.args = {
  id: "checkbox-checked",
  size: "middle",
  checked: true,
  appearance: {
    backgroundColor: "#ccc",
    borderColor: "#000",
    checkedBackgroundColor: "#411fe6",
    markColor: "#fff"
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "checkbox-disabled",
  size: "middle",
  disabled: true,
  appearance: {
    backgroundColor: "#ccc",
    borderColor: "#000",
    checkedBackgroundColor: "#411fe6",
    markColor: "#fff"
  }
};

export const Small = Template.bind({});
Small.args = {
  id: "checkbox-small",
  size: "small",
  appearance: {
    backgroundColor: "#ccc",
    borderColor: "#000",
    checkedBackgroundColor: "#411fe6",
    markColor: "#fff"
  }
};
