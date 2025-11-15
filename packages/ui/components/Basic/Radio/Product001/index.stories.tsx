import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { RadioGroup001 } from "../../RadioGroup/Product001";
import { Radio001 } from "./index";

const meta: Meta<typeof Radio001> = {
  title: "Basic/Radio/Product001",
  component: Radio001,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof Radio001> = (args) => {
  const [selected, setSelected] = useState("option1");

  return (
    <div style={{ padding: "20px" }}>
      <RadioGroup001
        label="基本的なラジオボタン"
        value={selected}
        onChange={setSelected}
      >
        <Radio001 {...args} value="option1">
          オプション1
        </Radio001>
        <Radio001 {...args} value="option2">
          オプション2
        </Radio001>
        <Radio001 {...args} value="option3">
          オプション3
        </Radio001>
      </RadioGroup001>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const CustomAppearance = Template.bind({});
CustomAppearance.args = {
  appearance: {
    fontSize: 18,
    color: "#333",
    borderColor: "#2196f3",
    checkedBackgroundColor: "#2196f3",
    markColor: "#fff",
    focusRingColor: "rgba(33, 150, 243, 0.4)",
    gap: 12
  }
};

export const DarkTheme = Template.bind({});
DarkTheme.decorators = [
  (Story) => (
    <div style={{ padding: "20px", backgroundColor: "#1a1a1a" }}>
      <Story />
    </div>
  )
];
DarkTheme.args = {
  appearance: {
    fontSize: 16,
    color: "#fff",
    borderColor: "#fff",
    checkedBackgroundColor: "#fff",
    markColor: "#000",
    focusRingColor: "rgba(255, 255, 255, 0.4)"
  }
};
