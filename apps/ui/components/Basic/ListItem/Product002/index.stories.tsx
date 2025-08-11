import type { Meta, StoryFn } from "@storybook/react";
import { ListItem002 } from "./index";

const meta: Meta<typeof ListItem002> = {
  title: "Basic/ListItem/Product002",
  component: ListItem002
};

export default meta;

const Template: StoryFn<typeof ListItem002> = (args) => (
  <div style={{ padding: "20px" }}>
    <ListItem002 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "これはポイント付きのリストアイテムです。長いテキストでも改行されて表示されます。"
};