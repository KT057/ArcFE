import type { Meta, StoryFn } from "@storybook/react";
import { TextButton001 } from "./index";

const meta: Meta<typeof TextButton001> = {
  title: "Basic/TextButton/Product001",
  component: TextButton001,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof TextButton001> = (args) => (
  <div style={{ padding: "20px", backgroundColor: "#333" }}>
    <TextButton001 {...args} />
  </div>
);

export const Type001 = Template.bind({});
Type001.args = {
  type: "001",
  children: "Text Button Component"
};

export const Type002 = Template.bind({});
Type002.args = {
  type: "002",
  children: "Text Button Component"
};

export const ButtonElement = Template.bind({});
ButtonElement.args = {
  type: "001",
  as: "button",
  children: "Button Element",
  onClick: () => alert("Button clicked!")
};

export const LinkElement = Template.bind({});
LinkElement.args = {
  type: "002",
  as: "a",
  href: "#",
  children: "Link Element"
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  type: "002",
  children: "Custom Style",
  style: {
    color: "#ffeb3b",
    fontSize: 16,
    hoverColor: "#ff5722",
    hoverDuration: "0.5s"
  }
};
