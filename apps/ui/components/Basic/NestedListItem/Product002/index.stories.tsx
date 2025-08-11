import type { Meta, StoryFn } from "@storybook/react";
import { Svg030Icon, Svg036Icon } from "../../Icons";
import { NestedListItem002 } from "./index";

const meta: Meta<typeof NestedListItem002> = {
  title: "Basic/NestedListItem/Product002",
  component: NestedListItem002
};

export default meta;

const Template: StoryFn<typeof NestedListItem002> = (args) => (
  <div style={{ padding: "20px" }}>
    <NestedListItem002 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  leftIcon: <Svg030Icon />,
  rightIcon: <Svg036Icon />,
  children: "左右にアイコンがあるネストリストアイテムです。右のアイコンをクリックすると回転します。"
};

export const Controlled = Template.bind({});
Controlled.args = {
  leftIcon: <Svg030Icon />,
  rightIcon: <Svg036Icon />,
  children: "制御されたオープン状態のネストリストアイテムです。",
  isOpen: true
};