import type { Meta, StoryFn } from "@storybook/react";
import { BgImageContent } from "./index";

const meta: Meta<typeof BgImageContent> = {
  title: "Advanced/common/BgImageContent",
  component: BgImageContent,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof BgImageContent> = (args) => (
  <div
    style={{
      padding: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <BgImageContent {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: <div>Hello</div>,
  imageUrl: "/images/img-01.jpg",
  height: 17
};
