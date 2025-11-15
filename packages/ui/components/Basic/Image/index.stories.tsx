import type { Meta, StoryFn } from "@storybook/react";
import { Image } from "./index";

export default {
  title: "Basic/Image",
  component: Image,
  tags: ["autodocs"]
} as Meta<typeof Image>;

const Template: StoryFn<typeof Image> = (args) => (
  <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
    <Image {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  pc: {
    src: "https://placehold.co/800x600"
  },
  sp: {
    src: "https://placehold.co/400x300"
  },
  alt: "Sample image"
};

export const WithObjectFit = Template.bind({});
WithObjectFit.args = {
  pc: {
    src: "https://placehold.co/800x600"
  },
  sp: {
    src: "https://placehold.co/400x300"
  },
  alt: "Sample image with object-fit cover",
  objectFit: true
};
