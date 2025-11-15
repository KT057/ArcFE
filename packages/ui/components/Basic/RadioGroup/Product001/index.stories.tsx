import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Radio001 } from "../../Radio/Product001";
import { RadioGroup001 } from "./index";

const meta: Meta<typeof RadioGroup001> = {
  title: "Basic/RadioGroup/Product001",
  component: RadioGroup001,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof RadioGroup001> = (args) => {
  const [selected, setSelected] = useState(args.value || "");

  return (
    <div style={{ padding: "20px" }}>
      <RadioGroup001 {...args} value={selected} onChange={setSelected}>
        <Radio001 value="option1">オプション1</Radio001>
        <Radio001 value="option2">オプション2</Radio001>
        <Radio001 value="option3">オプション3</Radio001>
      </RadioGroup001>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "選択してください",
  value: "option1"
};

export const WithCustomAppearance = Template.bind({});
WithCustomAppearance.args = {
  label: "カスタムスタイル",
  value: "option2",
  appearance: {
    labelFontSize: 18,
    labelColor: "#2196f3",
    labelFontWeight: "bold",
    labelMarginBottom: 12
  }
};

const CustomRadioTemplate: StoryFn<typeof RadioGroup001> = (args) => {
  const [selected, setSelected] = useState(args.value || "");

  return (
    <div style={{ padding: "20px" }}>
      <RadioGroup001 {...args} value={selected} onChange={setSelected}>
        <Radio001
          value="red"
          appearance={{
            fontSize: 16,
            color: "#000",
            borderColor: "#e53e3e",
            checkedBackgroundColor: "#e53e3e",
            markColor: "#fff",
            focusRingColor: "rgba(229, 62, 62, 0.4)"
          }}
        >
          赤
        </Radio001>
        <Radio001
          value="blue"
          appearance={{
            fontSize: 16,
            color: "#000",
            borderColor: "#3182ce",
            checkedBackgroundColor: "#3182ce",
            markColor: "#fff",
            focusRingColor: "rgba(49, 130, 206, 0.4)"
          }}
        >
          青
        </Radio001>
        <Radio001
          value="green"
          appearance={{
            fontSize: 16,
            color: "#000",
            borderColor: "#38a169",
            checkedBackgroundColor: "#38a169",
            markColor: "#fff",
            focusRingColor: "rgba(56, 161, 105, 0.4)"
          }}
        >
          緑
        </Radio001>
      </RadioGroup001>
    </div>
  );
};

export const CustomRadioColors = CustomRadioTemplate.bind({});
CustomRadioColors.args = {
  label: "好きな色を選んでください",
  value: "blue"
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "無効な選択",
  value: "option1",
  isDisabled: true
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  label: "横並びの選択",
  value: "option1",
  appearance: {
    orientation: "horizontal"
  }
};

export const HorizontalWithCustomGap = Template.bind({});
HorizontalWithCustomGap.args = {
  label: "横並び（カスタムギャップ）",
  value: "option2",
  appearance: {
    orientation: "horizontal",
    gap: 24
  }
};
