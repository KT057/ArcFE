import type { Meta, StoryFn } from "@storybook/react";
import { getPublicPath } from "@utils/get-public-path";
import { ParallaxImage } from "./index";

const meta: Meta<typeof ParallaxImage> = {
  title: "Basic/Parallax/Image",
  component: ParallaxImage,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof ParallaxImage> = (args) => (
  <div style={{ height: "300vh", padding: "20px", position: "relative" }}>
    <div style={{ position: "absolute", top: "100vh", left: 0, width: "50%" }}>
      <ParallaxImage {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  layer: { image: getPublicPath("/images/img-01.jpg"), speed: -15 },
  height: 400
};
