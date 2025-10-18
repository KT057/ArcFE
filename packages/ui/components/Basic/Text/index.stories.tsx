import type { Meta, StoryFn } from "@storybook/react";
import { Text } from "./index";

const meta: Meta<typeof Text> = {
  title: "Basic/Text",
  component: Text,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof Text> = (args) => (
  <div>
    <Text {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "テキスト",
  fontSize: 16
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  children: "これは段落テキストです。",
  fontSize: 14,
  color: "#333"
};

export const Heading = Template.bind({});
Heading.args = {
  children: "見出しテキスト",
  fontSize: 24,
  color: "#2196f3"
};

export const Span = Template.bind({});
Span.args = {
  children: "インラインテキスト",
  fontSize: 14,
  color: "#333"
};
