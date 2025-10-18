import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { CircleProgress } from "./index";

const meta: Meta<typeof CircleProgress> = {
  title: "Advanced/common/CircleProgress",
  component: CircleProgress,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof CircleProgress> = (args) => (
  <div
    style={{
      padding: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <CircleProgress {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  size: 17
};

export const Progress = Template.bind({});
Progress.args = {
  progress: 50,
  size: 17
};

export const ProgressZero = Template.bind({});
ProgressZero.args = {
  progress: 0,
  size: 17
};

export const ProgressFull = Template.bind({});
ProgressFull.args = {
  progress: 100,
  size: 17
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  progress: 75,
  size: 20,
  style: {
    primaryColor: "#22c55e",
    trackColor: "#f3f4f6"
  }
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  progress: 60,
  size: 20,
  style: {
    strokeWidth: 3
  }
};

export const SlowAnimation = Template.bind({});
SlowAnimation.args = {
  progress: 80,
  size: 20,
  style: {
    animationDuration: "5s",
    primaryColor: "#f59e0b"
  }
};

const MultiDotsTemplate: StoryFn<typeof CircleProgress> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalDots = 5;

  return (
    <div style={{ padding: "50px" }}>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        {/** biome-ignore lint/a11y/useButtonType: lint/suppressions/incorrect */}
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev > 0 ? prev - 1 : totalDots - 1))
          }
          style={{ marginRight: "10px" }}
        >
          Previous
        </button>
        {/** biome-ignore lint/a11y/useButtonType: lint/suppressions/incorrect */}
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev < totalDots - 1 ? prev + 1 : 0))
          }
        >
          Next
        </button>
      </div>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {Array.from({ length: totalDots }, (_, index) => (
          <CircleProgress
            // biome-ignore lint/suspicious/noArrayIndexKey: lint/suppressions/incorrect
            key={index}
            size={17}
            progress={index === activeIndex ? 100 : 0}
            style={{
              primaryColor: index === activeIndex ? "#3b82f6" : "#cbd5e1"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const MultipleDots = MultiDotsTemplate.bind({});

const InteractiveTemplate: StoryFn<typeof CircleProgress> = () => {
  const [progress, setProgress] = useState(50);

  return (
    <div style={{ padding: "50px", maxWidth: "400px" }}>
      <div style={{ marginBottom: "20px" }}>
        {/** biome-ignore lint/a11y/noLabelWithoutControl: lint/suppressions/incorrect */}
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
      <div style={{ textAlign: "center" }}>
        <CircleProgress progress={progress} size={17} />
      </div>
    </div>
  );
};

export const Interactive = InteractiveTemplate.bind({});
