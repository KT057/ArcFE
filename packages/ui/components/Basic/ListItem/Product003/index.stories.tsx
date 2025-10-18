import type { Meta, StoryFn } from "@storybook/react";
import { ListItem003 } from "./index";

const meta: Meta<typeof ListItem003> = {
  title: "Basic/ListItem/Product003",
  component: ListItem003,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof ListItem003> = (args) => (
  <div style={{ padding: "20px" }}>
    <ListItem003 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "これは四角形ポイント付きのリストアイテムです。"
};
