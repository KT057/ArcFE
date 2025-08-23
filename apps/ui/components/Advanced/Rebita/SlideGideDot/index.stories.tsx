import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { RebitaSlideGuideDot } from "./index";

const meta: Meta<typeof RebitaSlideGuideDot> = {
  title: "Advanced/Rebita/SlideGuideDot",
  component: RebitaSlideGuideDot,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof RebitaSlideGuideDot> = (args) => (
  <div
    style={{
      padding: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <RebitaSlideGuideDot {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "default"
};

export const Progress = Template.bind({});
Progress.args = {
  type: "progress",
  progress: 50
};

export const ProgressZero = Template.bind({});
ProgressZero.args = {
  type: "progress",
  progress: 0
};

export const ProgressFull = Template.bind({});
ProgressFull.args = {
  type: "progress",
  progress: 100
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  type: "progress",
  progress: 75,
  style: {
    primaryColor: "#22c55e",
    trackColor: "#f3f4f6",
    circleSize: 10,
    dotSize: 10
  }
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  type: "progress",
  progress: 60,
  style: {
    circleSize: 30,
    dotSize: 30,
    strokeWidth: 3
  }
};

export const SlowAnimation = Template.bind({});
SlowAnimation.args = {
  type: "progress",
  progress: 80,
  style: {
    animationDuration: "5s",
    primaryColor: "#f59e0b"
  }
};

const MultiDotsTemplate: StoryFn<typeof RebitaSlideGuideDot> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalDots = 5;

  return (
    <div style={{ padding: "50px" }}>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev > 0 ? prev - 1 : totalDots - 1))
          }
          style={{ marginRight: "10px" }}
        >
          Previous
        </button>
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
          <RebitaSlideGuideDot
            key={index}
            type="progress"
            progress={index === activeIndex ? 100 : 0}
            onClick={() => setActiveIndex(index)}
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

const InteractiveTemplate: StoryFn<typeof RebitaSlideGuideDot> = () => {
  const [progress, setProgress] = useState(50);

  return (
    <div style={{ padding: "50px", maxWidth: "400px" }}>
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
      <div style={{ textAlign: "center" }}>
        <RebitaSlideGuideDot
          type="progress"
          progress={progress}
          onClick={() => {
            console.log("clicked");
          }}
        />
      </div>
    </div>
  );
};

export const Interactive = InteractiveTemplate.bind({});
