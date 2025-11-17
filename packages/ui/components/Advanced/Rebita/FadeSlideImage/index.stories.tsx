import type { Meta, StoryFn } from "@storybook/react";
import { getPublicPath } from "@utils/get-public-path";
import { RebitaFadeSlideImage } from "./index";

const meta: Meta<typeof RebitaFadeSlideImage> = {
  title: "Advanced/Rebita/FadeSlideImage",
  component: RebitaFadeSlideImage,
  tags: ["autodocs"],
  parameters: {
    screenshot: {
      skip: true
    }
  }
};

export default meta;

const Template: StoryFn<typeof RebitaFadeSlideImage> = (args) => (
  <div style={{ padding: "50px", maxWidth: "600px", margin: "0 auto" }}>
    <RebitaFadeSlideImage {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  images: [
    { src: getPublicPath("/images/img-01.jpg"), alt: "Image+1" },
    { src: getPublicPath("/images/img-02.jpg"), alt: "Image+2" },
    { src: getPublicPath("/images/img-03.jpg"), alt: "Image+3" }
  ]
};

export const CustomImages = Template.bind({});
CustomImages.args = {
  images: [
    { src: getPublicPath("/images/img-01.jpg"), alt: "Image+1" },
    { src: getPublicPath("/images/img-02.jpg"), alt: "Image+2" },
    { src: getPublicPath("/images/img-03.jpg"), alt: "Image+3" }
  ],
  slideGuideDotProps: {
    appearance: {
      circleSize: 15,
      dotSize: 15,
      primaryColor: "#22c55e",
      trackColor: "#f3f4f6",
      strokeWidth: 2,
      animationDuration: "5s"
    }
  },
  appearance: {
    guideGap: 10
  }
};

export const SlowTransition = Template.bind({});
SlowTransition.args = {
  images: [
    { src: getPublicPath("/images/img-01.jpg"), alt: "Slow+1" },
    { src: getPublicPath("/images/img-02.jpg"), alt: "Slow+2" },
    { src: getPublicPath("/images/img-03.jpg"), alt: "Slow+3" }
  ]
};

export const FastTransition = Template.bind({});
FastTransition.args = {
  fadeInAndZoomImagesProps: {
    duration: 1,
    fadeDuration: 1
  },
  images: [
    { src: getPublicPath("/images/img-01.jpg"), alt: "Fast+1" },
    { src: getPublicPath("/images/img-02.jpg"), alt: "Fast+2" },
    { src: getPublicPath("/images/img-03.jpg"), alt: "Fast+3" }
  ]
};

export const TwoImages = Template.bind({});
TwoImages.args = {
  images: [
    { src: getPublicPath("/images/img-01.jpg"), alt: "First" },
    { src: getPublicPath("/images/img-02.jpg"), alt: "Second" }
  ]
};

export const FiveImages = Template.bind({});
FiveImages.args = {
  images: [
    { src: getPublicPath("/images/img-01.jpg"), alt: "Image+1" },
    { src: getPublicPath("/images/img-02.jpg"), alt: "Image+2" },
    { src: getPublicPath("/images/img-03.jpg"), alt: "Image+3" },
    { src: getPublicPath("/images/img-04.jpg"), alt: "Image+4" }
  ],
  fadeInAndZoomImagesProps: {
    duration: 1,
    fadeDuration: 1
  }
};

export const NoAutoPlay = Template.bind({});
NoAutoPlay.args = {
  images: [
    { src: getPublicPath("/images/img-01.jpg"), alt: "Static+1" },
    { src: getPublicPath("/images/img-02.jpg"), alt: "Static+2" },
    { src: getPublicPath("/images/img-03.jpg"), alt: "Static+3" }
  ]
};

export const SingleImage = Template.bind({});
SingleImage.args = {
  images: [{ src: getPublicPath("/images/img-01.jpg"), alt: "Single+Image" }]
};
