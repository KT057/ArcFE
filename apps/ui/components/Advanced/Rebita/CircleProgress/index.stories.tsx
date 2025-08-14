import type { Meta, StoryFn } from "@storybook/react";
import { RebitaCircleProgress } from "./index";

const meta: Meta<typeof RebitaCircleProgress> = {
  title: "Advanced/Rebita/CircleProgress",
  component: RebitaCircleProgress,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof RebitaCircleProgress> = (args) => (
  <div
    style={{
      padding: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <RebitaCircleProgress {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  progress: 50,
  children: "50%"
};

export const Small = Template.bind({});
Small.args = {
  progress: 25,
  children: "25%",
  style: {
    size: 60,
    strokeWidth: 2,
    fontSize: 12
  }
};

export const Large = Template.bind({});
Large.args = {
  progress: 75,
  children: "75%",
  style: {
    size: 150,
    strokeWidth: 4,
    fontSize: 20
  }
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  progress: 80,
  children: "80%",
  style: {
    primaryColor: "#22c55e",
    trackColor: "#f3f4f6",
    textColor: "#22c55e",
    size: 120
  }
};

export const SlowAnimation = Template.bind({});
SlowAnimation.args = {
  progress: 90,
  children: "90%",
  style: {
    animationDuration: "5s",
    primaryColor: "#f59e0b"
  }
};

export const Complete = Template.bind({});
Complete.args = {
  progress: 100,
  children: "Complete!",
  style: {
    primaryColor: "#10b981",
    textColor: "#10b981",
    fontSize: 14
  }
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  progress: 65,
  children: (
    <div>
      <div style={{ fontSize: "18px", fontWeight: "bold" }}>65</div>
      <div style={{ fontSize: "10px" }}>POINTS</div>
    </div>
  ),
  style: {
    size: 100,
    primaryColor: "#8b5cf6",
    textColor: "#8b5cf6"
  }
};
