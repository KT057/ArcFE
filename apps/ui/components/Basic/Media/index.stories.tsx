import type { Meta, StoryFn } from "@storybook/react";
import { Media } from "./index";

const meta: Meta<typeof Media> = {
  title: "Basic/Media",
  component: Media,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof Media> = (args) => (
  <div style={{ padding: "20px" }}>
    <Media {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  pc: <div>pc</div>,
  tablet: <div>tablet</div>,
  sp: <div>sp</div>
};
