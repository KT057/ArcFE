import type { Meta, StoryFn } from "@storybook/react";
import { FadeInAndZoomImages } from "./index";

const meta: Meta<typeof FadeInAndZoomImages> = {
  title: "Advanced/common/FadeInAndZoomImages",
  component: FadeInAndZoomImages,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof FadeInAndZoomImages> = (args) => (
  <div style={{ width: "600px", margin: "20px auto" }}>
    <FadeInAndZoomImages {...args} />
  </div>
);

const sampleImages = [
  { src: "/images/img-01.jpg", alt: "Sample Image 1" },
  { src: "/images/img-02.jpg", alt: "Sample Image 2" },
  { src: "/images/img-03.jpg", alt: "Sample Image 3" },
  { src: "/images/img-04.jpg", alt: "Sample Image 4" }
];

export const Default = Template.bind({});
Default.args = {
  images: sampleImages,
  onProgress: () => null,
  onImageChange: () => null
};

export const FastTransition = Template.bind({});
FastTransition.args = {
  images: sampleImages,
  duration: 2,
  fadeDuration: 1,
  onProgress: () => null,
  onImageChange: () => null
};

export const SlowTransition = Template.bind({});
SlowTransition.args = {
  images: sampleImages,
  duration: 6,
  fadeDuration: 3,
  onProgress: () => null,
  onImageChange: () => null
};

export const CustomScale = Template.bind({});
CustomScale.args = {
  images: sampleImages,
  scaleTo: 1.5,
  duration: 4,
  onProgress: () => null,
  onImageChange: () => null
};
