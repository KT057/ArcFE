import type { Meta, StoryFn } from "@storybook/react";
import { ListItem005 } from "./index";

const meta: Meta<typeof ListItem005> = {
  title: "Basic/ListItem/Product005",
  component: ListItem005,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof ListItem005> = (args) => (
  <div style={{ padding: "20px" }}>
    <ListItem005 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "これはライン形状ポイント付きのリストアイテムです。"
};
