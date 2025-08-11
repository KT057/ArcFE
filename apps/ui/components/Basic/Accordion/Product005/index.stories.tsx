import type { Meta, StoryFn } from "@storybook/react";
import { Svg036Icon } from "../../Icons";
import { Accordion005 } from "./index";

export default {
  title: "Basic/Accordion/Product005",
  component: Accordion005
} as Meta<typeof Accordion005>;

const Template: StoryFn<typeof Accordion005> = (args) => (
  <div style={{ width: "400px" }}>
    <Accordion005 {...args} />
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
  style: {
    backgroundColor: "#ccc",
    iconColor: "#000",
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
