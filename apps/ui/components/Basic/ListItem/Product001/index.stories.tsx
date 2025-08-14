import type { Meta, StoryFn } from "@storybook/react";
import { ListItem001 } from "./index";

const meta: Meta<typeof ListItem001> = {
  title: "Basic/ListItem/Product001",
  component: ListItem001
};

export default meta;

const Template: StoryFn<typeof ListItem001> = (args) => (
  <div style={{ padding: "20px" }}>
    <ListItem001 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  number: "01",
  children:
    "これは番号付きのリストアイテムです。長いテキストでも改行されて表示されます。"
};
