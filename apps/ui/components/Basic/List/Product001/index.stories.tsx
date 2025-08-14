import type { Meta, StoryFn } from "@storybook/react";
import { List001 } from "./index";

const meta: Meta<typeof List001> = {
  title: "Basic/List/Product001",
  component: List001
};

export default meta;

const Template: StoryFn<typeof List001> = (args) => (
  <div style={{ padding: "20px" }}>
    <List001 {...args} />
  </div>
);

const sampleItems = [
  { id: "1", content: "リストアイテム1" },
  { id: "2", content: "リストアイテム2" },
  { id: "3", content: "リストアイテム3" },
  { id: "4", content: "リストアイテム4" }
];

export const Default = Template.bind({});
Default.args = {
  type: "001",
  items: sampleItems
};
