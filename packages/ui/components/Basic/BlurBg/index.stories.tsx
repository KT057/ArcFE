import type { Meta, StoryFn } from "@storybook/react";
import { BlurBg } from "./index";

export default {
  title: "Basic/BlurBg",
  component: BlurBg,
  tags: ["autodocs"]
} as Meta<typeof BlurBg>;

const Template: StoryFn<typeof BlurBg> = (args) => (
  <div style={{ position: "relative", width: "600px", height: "400px" }}>
    <BlurBg {...args} />
    <div
      style={{
        position: "relative",
        zIndex: 1,
        padding: "20px",
        color: "#333"
      }}
    >
      <h2>Content goes here</h2>
      <p>
        This is sample content that will be displayed over the blurred
        background.
      </p>
    </div>
  </div>
);

export const FadeFromTop = Template.bind({});
FadeFromTop.args = {
  direction: "top",
  bgColor: "#000",
  fadeStart: 50
};

export const FadeFromBottom = Template.bind({});
FadeFromBottom.args = {
  direction: "bottom",
  bgColor: "#000",
  fadeStart: 50
};

export const FadeFromLeft = Template.bind({});
FadeFromLeft.args = {
  direction: "left",
  bgColor: "#000",
  fadeStart: 50
};

export const FadeFromRight = Template.bind({});
FadeFromRight.args = {
  direction: "right",
  bgColor: "#000",
  fadeStart: 50
};

export const CustomFadeStart = Template.bind({});
CustomFadeStart.args = {
  direction: "bottom",
  bgColor: "#000",
  fadeStart: 50
};

export const FadeFromAll = Template.bind({});
FadeFromAll.args = {
  direction: "all",
  bgColor: "#000",
  fadeStart: 50
};

export const WithBlur = Template.bind({});
WithBlur.args = {
  direction: "all",
  bgColor: "#000",
  fadeStart: 30,
  blurAmount: 10
};

export const DirectionalWithBlur = Template.bind({});
DirectionalWithBlur.args = {
  direction: "bottom",
  bgColor: "#000",
  fadeStart: 50,
  blurAmount: 5
};
