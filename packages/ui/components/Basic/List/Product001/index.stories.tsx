import type { Meta, StoryFn } from "@storybook/react";
import { rem } from "../../../../styles/font";
import { ListItem001 } from "../../ListItem/Product001";
import { List001 } from "./index";

const meta: Meta<typeof List001> = {
  title: "Basic/List/Product001",
  component: List001,
  tags: ["autodocs"]
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

const listItemSamples = [
  {
    id: "item-1",
    content: (
      <ListItem001 number="01" onClick={() => alert("Item 1 clicked")}>
        <p style={{ fontSize: rem(24) }}>
          これは番号付きのリストアイテムです。長いテキストでも改行されて表示されます。
        </p>
      </ListItem001>
    )
  },
  {
    id: "item-2",
    content: (
      <ListItem001 number="02" onClick={() => alert("Item 2 clicked")}>
        <p style={{ fontSize: rem(24) }}>
          2つ目のリストアイテムです。クリック可能でインタラクティブな要素として機能します。
        </p>
      </ListItem001>
    )
  },
  {
    id: "item-3",
    content: (
      <ListItem001 number="03" onClick={() => alert("Item 3 clicked")}>
        <p style={{ fontSize: rem(24) }}>
          3つ目のリストアイテムです。React
          Ariaによるアクセシビリティサポートが含まれています。
        </p>
      </ListItem001>
    )
  },
  {
    id: "item-4",
    content: (
      <ListItem001 number="04" onClick={() => alert("Item 4 clicked")}>
        <p style={{ fontSize: rem(24) }}>
          最後のリストアイテムです。各アイテムにはユニークなIDが割り当てられています。
        </p>
      </ListItem001>
    )
  }
];

export const Default = Template.bind({});
Default.args = {
  type: "001",
  items: sampleItems
};

export const WithListItem001 = Template.bind({});
WithListItem001.args = {
  type: "001",
  items: listItemSamples,
  ariaLabel: "Numbered list with interactive items"
};

export const WithListItem001AsOrderedList = Template.bind({});
WithListItem001AsOrderedList.args = {
  type: "001",
  listStyle: "ol",
  items: listItemSamples,
  ariaLabel: "Ordered list with numbered items"
};

export const WithListItem001CustomGap = Template.bind({});
WithListItem001CustomGap.args = {
  type: "001",
  items: listItemSamples,
  ariaLabel: "List with custom gap",
  style: {
    columnGap: 30
  }
};
