import type { Meta, StoryFn } from "@storybook/react";
import { ScrollReveal } from "./index";

export default {
  title: "Basic/ScrollReveal",
  component: ScrollReveal,
  tags: ["autodocs"]
} as Meta<typeof ScrollReveal>;

const Template: StoryFn<typeof ScrollReveal> = (args) => (
  <div>
    {/* スクロールを作るためのスペーサー */}
    <div style={{ height: "100vh", background: "#f0f0f0", padding: "20px" }}>
      <h2>Scroll down to see the reveal animation</h2>
      <p>The content will appear with animation when it comes into view</p>
    </div>

    {/* ScrollRevealコンポーネント */}
    <div style={{ padding: "20px", background: "#fff" }}>
      <ScrollReveal {...args}>
        <div
          style={{
            padding: "40px",
            background: "#4CAF50",
            color: "white",
            borderRadius: "8px",
            textAlign: "center"
          }}
        >
          <h3>This content reveals on scroll!</h3>
          <p>It appears with a smooth animation.</p>
        </div>
      </ScrollReveal>
    </div>

    {/* 下部のスペーサー */}
    <div style={{ height: "50vh", background: "#e0e0e0" }} />
  </div>
);

export const FadeUp = Template.bind({});
FadeUp.args = {
  type: "fadeUp"
};

export const FadeIn = Template.bind({});
FadeIn.args = {
  type: "fadeIn"
};

export const SlideLeft = Template.bind({});
SlideLeft.args = {
  type: "slideLeft"
};

export const SlideRight = Template.bind({});
SlideRight.args = {
  type: "slideRight"
};

export const FastAnimation = Template.bind({});
FastAnimation.args = {
  type: "fadeUp",
  duration: 0.3
};

export const SlowAnimation = Template.bind({});
SlowAnimation.args = {
  type: "fadeUp",
  duration: 1.5
};

export const WithDelay = Template.bind({});
WithDelay.args = {
  type: "fadeUp",
  delay: 0.5
};

export const LargeDistance = Template.bind({});
LargeDistance.args = {
  type: "fadeUp",
  distance: 100
};

export const SmallDistance = Template.bind({});
SmallDistance.args = {
  type: "fadeUp",
  distance: 20
};

export const RepeatAnimation: StoryFn<typeof ScrollReveal> = () => (
  <div>
    <div style={{ height: "100vh", background: "#f0f0f0", padding: "20px" }}>
      <h2>Scroll up and down to repeat the animation</h2>
      <p>The animation will trigger every time the element enters the viewport</p>
    </div>

    <div style={{ padding: "20px", background: "#fff" }}>
      <ScrollReveal type="fadeUp" triggerOnce={false}>
        <div
          style={{
            padding: "40px",
            background: "#9C27B0",
            color: "white",
            borderRadius: "8px",
            textAlign: "center"
          }}
        >
          <h3>Repeating Animation</h3>
          <p>Scroll up and down to see the animation repeat!</p>
        </div>
      </ScrollReveal>
    </div>

    <div style={{ height: "100vh", background: "#e0e0e0" }} />
  </div>
);

export const MultipleAnimationTypes: StoryFn<typeof ScrollReveal> = () => (
  <div>
    <div style={{ height: "50vh", background: "#f0f0f0", padding: "20px" }}>
      <h2>Different animation types</h2>
    </div>

    {[
      { type: "fadeUp" as const, name: "Fade Up", color: "#4CAF50" },
      { type: "fadeIn" as const, name: "Fade In", color: "#2196F3" },
      { type: "slideLeft" as const, name: "Slide Left", color: "#FF9800" },
      { type: "slideRight" as const, name: "Slide Right", color: "#9C27B0" }
    ].map((item, index) => (
      <div key={index} style={{ padding: "20px", background: "#fff" }}>
        <ScrollReveal type={item.type} delay={index * 0.1}>
          <div
            style={{
              padding: "30px",
              background: item.color,
              color: "white",
              borderRadius: "8px",
              marginBottom: "20px"
            }}
          >
            <h3>{item.name}</h3>
            <p>Animation type: {item.type}</p>
          </div>
        </ScrollReveal>
      </div>
    ))}

    <div style={{ height: "50vh", background: "#e0e0e0" }} />
  </div>
);

export const TextContent: StoryFn<typeof ScrollReveal> = () => (
  <div>
    <div style={{ height: "80vh", background: "#f0f0f0", padding: "20px" }}>
      <h2>Text content with scroll reveal animation</h2>
    </div>

    <div
      style={{
        padding: "40px",
        background: "#fff",
        maxWidth: "800px",
        margin: "0 auto"
      }}
    >
      <ScrollReveal type="fadeUp">
        <h1>Main Heading</h1>
      </ScrollReveal>

      <ScrollReveal type="fadeIn" delay={0.2}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </ScrollReveal>

      <ScrollReveal type="slideLeft" delay={0.4}>
        <h2>Subheading</h2>
      </ScrollReveal>

      <ScrollReveal type="slideRight" delay={0.6}>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </ScrollReveal>
    </div>

    <div style={{ height: "50vh", background: "#e0e0e0" }} />
  </div>
);
