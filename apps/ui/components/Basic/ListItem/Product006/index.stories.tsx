import type { Meta, StoryFn } from "@storybook/react";
import { FrameNumber001 } from "../../FrameNumber/Product001";
import { ListItem006 } from "./index";

const meta: Meta<typeof ListItem006> = {
  title: "Basic/ListItem/Product006",
  component: ListItem006
};

export default meta;

const Template: StoryFn<typeof ListItem006> = (args) => (
  <div style={{ padding: "20px" }}>
    <ListItem006 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  frameNumber: <FrameNumber001 number={1} type="001" size="small" />,
  children: "これはフレーム番号付きのリストアイテムです。"
};