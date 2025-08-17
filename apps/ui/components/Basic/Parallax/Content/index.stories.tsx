import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { ParallaxContent } from "./index";

const meta: Meta<typeof ParallaxContent> = {
  title: "Basic/Parallax/Content",
  component: ParallaxContent,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof ParallaxContent> = (args) => {
  const [progress, setProgress] = useState(0);

  return (
    <div style={{ height: "300vh", padding: "20px", position: "relative" }}>
      <div
        style={{ position: "absolute", top: "100vw", left: 0, width: "50%" }}
      >
        <ParallaxContent
          {...args}
          parallaxProps={{
            rootMargin: { top: 0, bottom: -350, left: 0, right: 0 },
            onProgressChange: (progress) => {
              setProgress(progress);
            }
          }}
        >
          <h1>{progress}%</h1>
        </ParallaxContent>
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
