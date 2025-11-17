import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { CheckBox001 } from "./index";

const meta: Meta<typeof CheckBox001> = {
  title: "Basic/CheckBox/Product001",
  component: CheckBox001,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof CheckBox001> = (args) => {
  const [checked, setChecked] = useState(args.checked || false);

  return (
    <div style={{ width: "300px" }}>
      <CheckBox001
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
  type: "001",
  size: "middle",
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    checkedBackgroundColor: "#411fe6",
    markColor: "#fff"
  }
};

export const Checked = Template.bind({});
Checked.args = {
  id: "checkbox-checked",
  type: "001",
  size: "middle",
  checked: true,
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    checkedBackgroundColor: "#411fe6",
    markColor: "#fff"
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: "checkbox-disabled",
  type: "001",
  size: "middle",
  disabled: true,
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    checkedBackgroundColor: "#411fe6",
    markColor: "#fff"
  }
};

export const Type002 = Template.bind({});
Type002.args = {
  id: "checkbox-002",
  type: "002",
  size: "middle",
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    checkedBackgroundColor: "#411fe6",
    markColor: "#fff"
  }
};

export const Type003 = Template.bind({});
Type003.args = {
  id: "checkbox-003",
  type: "003",
  size: "middle",
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    checkedBackgroundColor: "#411fe6",
    markColor: "#fff"
  }
};
