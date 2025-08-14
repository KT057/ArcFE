import type { Meta, StoryFn } from "@storybook/react";
import { Svg031Icon } from "../../Icons";
import { ListItem004 } from "./index";

const meta: Meta<typeof ListItem004> = {
  title: "Basic/ListItem/Product004",
  component: ListItem004
};

export default meta;

const Template: StoryFn<typeof ListItem004> = (args) => (
  <div style={{ padding: "20px" }}>
    <ListItem004 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  icon: <Svg031Icon />,
  children: "これはアイコン付きのリストアイテムです。"
};
