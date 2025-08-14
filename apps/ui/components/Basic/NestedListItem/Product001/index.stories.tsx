import type { Meta, StoryFn } from "@storybook/react";
import { Svg036Icon } from "../../Icons";
import { NestedListItem001 } from "./index";

const meta: Meta<typeof NestedListItem001> = {
  title: "Basic/NestedListItem/Product001",
  component: NestedListItem001,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof NestedListItem001> = (args) => (
  <div style={{ padding: "20px" }}>
    <NestedListItem001 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  icon: <Svg036Icon />,
  children:
    "ネストリストアイテムのテキストです。クリックするとアイコンが回転します。"
};

export const Controlled = Template.bind({});
Controlled.args = {
  icon: <Svg036Icon />,
  children: "制御されたオープン状態のネストリストアイテムです。",
  isOpen: true
};
