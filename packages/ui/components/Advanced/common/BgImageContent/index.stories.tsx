import type { Meta, StoryFn } from "@storybook/react";
import { rem } from "../../../../styles";
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
      width: "100%",
      padding: "50px"
    }}
  >
    <BgImageContent {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <div
      style={{
        fontSize: rem(20),
        width: "100%",
        height: "100%",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
      }}
    >
      Hello
    </div>
  ),
  imageUrl: "/images/img-01.jpg",
  height: 400
};

export const AnimationType002 = Template.bind({});
AnimationType002.args = {
  children: (
    <div
      style={{
        fontSize: rem(20),
        width: "100%",
        height: "100%",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
      }}
    >
      Hello
    </div>
  ),
  imageUrl: "/images/img-01.jpg",
  height: 400,
  animationType: "002"
};
