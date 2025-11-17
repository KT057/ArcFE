import type { Meta, StoryFn } from "@storybook/react";
import { Svg036Icon } from "../../Icons";
import { Accordion003 } from "./index";

export default {
  title: "Basic/Accordion/Product003",
  component: Accordion003,
  tags: ["autodocs"]
} as Meta<typeof Accordion003>;

const Template: StoryFn<typeof Accordion003> = (args) => (
  <div style={{ width: "400px" }}>
    <Accordion003 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  headerContent: "Accordion",
  content: "コンテキスト",
  icon: <Svg036Icon />,
  appearance: {
    backgroundColor: "#ccc",
    header: {
      backgroundColor: "#ccc",
      barColor: "#000",
      color: "#000"
    },
    content: {
      color: "#000"
    }
  }
};
