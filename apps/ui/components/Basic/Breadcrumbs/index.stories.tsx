import type { Meta, StoryFn } from "@storybook/react";
import { Breadcrumbs } from "./index";

export default {
  title: "Basic/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"]
} as Meta<typeof Breadcrumbs>;

const Template: StoryFn<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      text: "Home"
    },
    {
      text: "Products"
    },
    {
      text: "Product 1",
      link: {
        href: "#"
      }
    }
  ],
  style: {
    color: "#000",
    fontSize: 16,
    hoverColor: "#ccc",
    duration: 0.3,
    easing: "easeInOutSine",
    iconColor: "#000"
  }
};
