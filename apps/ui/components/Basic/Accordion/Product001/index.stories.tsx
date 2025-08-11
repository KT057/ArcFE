import type { Meta, StoryFn } from "@storybook/react";
import { Svg036Icon } from "../../Icons";
import { Accordion001 } from "./index";

export default {
  title: "Basic/Accordion/Product001",
  component: Accordion001
} as Meta<typeof Accordion001>;

const Template: StoryFn<typeof Accordion001> = (args) => (
  <div style={{ width: "400px" }}>
    <Accordion001 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  headerContent: "Accordion",
  content: "コンテキスト",
  icon: <Svg036Icon />,
  style: {
    borderColor: "#000",
    header: {
      color: "#000"
    },
    content: {
      color: "#000"
    }
  }
};
