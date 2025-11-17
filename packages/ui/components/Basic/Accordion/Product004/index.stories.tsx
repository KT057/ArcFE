import type { Meta, StoryFn } from "@storybook/react";
import { Svg036Icon } from "../../Icons";
import { Accordion004 } from "./index";

export default {
  title: "Basic/Accordion/Product004",
  component: Accordion004,
  tags: ["autodocs"]
} as Meta<typeof Accordion004>;

const Template: StoryFn<typeof Accordion004> = (args) => (
  <div style={{ width: "400px" }}>
    <Accordion004 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  header: {
    title: "Q",
    text: "コンテキスト"
  },
  content: {
    title: "A",
    text: "詳細"
  },
  icon: <Svg036Icon />,
  appearance: {
    borderColor: "#ccc",
    header: {
      titleColor: "#3607f1",
      textColor: "#000"
    },
    content: {
      titleColor: "#f70808",
      textColor: "#000"
    }
  }
};
