import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { RebitaFadeText } from "./index";

const meta: Meta<typeof RebitaFadeText> = {
  title: "Advanced/Rebita/FadeText",
  component: RebitaFadeText
};

export default meta;

const Template: StoryFn<typeof RebitaFadeText> = (args) => (
  <div style={{ padding: "50px", maxWidth: "600px" }}>
    <RebitaFadeText {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children:
    "街に行き交う人々の居場所となり、コミュニティがさらなる価値を生み出す",
  progress: 50
};

export const ZeroProgress = Template.bind({});
ZeroProgress.args = {
  children: "この文字は全く見えていません",
  progress: 0
};

export const FullProgress = Template.bind({});
FullProgress.args = {
  children: "この文字は完全に表示されています",
  progress: 100
};

export const PartialProgress = Template.bind({});
PartialProgress.args = {
  children: "この文字は部分的に表示されています",
  progress: 25
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  children: "カスタムスタイルのテキスト",
  progress: 75,
  style: {
    color: "#22c55e",
    fontSize: 20
  }
};

const InteractiveTemplate: StoryFn<typeof RebitaFadeText> = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div style={{ padding: "50px", maxWidth: "600px" }}>
      <div style={{ marginBottom: "20px" }}>
        <label>Progress: {progress}%</label>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          style={{ width: "100%", marginLeft: "10px" }}
        />
      </div>
      <RebitaFadeText progress={progress}>
        街に行き交う人々の居場所となり、コミュニティがさらなる価値を生み出す
      </RebitaFadeText>
    </div>
  );
};

export const Interactive = InteractiveTemplate.bind({});

export const LongText = Template.bind({});
LongText.args = {
  children:
    "これは非常に長いテキストの例です。clip-pathによってテキストが徐々に表示される効果を確認することができます。",
  progress: 60,
  style: {
    fontSize: 18
  }
};
