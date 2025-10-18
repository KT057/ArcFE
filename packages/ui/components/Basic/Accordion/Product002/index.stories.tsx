import type { Meta, StoryFn } from "@storybook/react";
import { Svg036Icon } from "../../Icons";
import { Accordion002 } from "./index";

export default {
  title: "Basic/Accordion/Product002",
  component: Accordion002,
  tags: ["autodocs"]
} as Meta<typeof Accordion002>;

const Template: StoryFn<typeof Accordion002> = (args) => (
  <div style={{ width: "400px" }}>
    <Accordion002 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  headerContent: "Accordion",
  content: "コンテキスト",
  icon: <Svg036Icon />,
  style: {
    backgroundColor: "#ccc",
    header: {
      color: "#000"
    },
    content: {
      color: "#000"
    }
  }
};
