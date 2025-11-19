import type { Meta, StoryFn } from "@storybook/react";
import { JmcButton } from "./index";

const meta: Meta<typeof JmcButton> = {
  title: "Advanced/Jmc/Button",
  component: JmcButton,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof JmcButton> = (args) => (
  <div
    style={{
      padding: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <JmcButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "ボタン"
};

export const ButtonElement = Template.bind({});
ButtonElement.args = {
  children: "Button Element",
  as: "button",
  onClick: () => alert("Jmc button clicked!")
};

export const LinkElement = Template.bind({});
LinkElement.args = {
  children: "Link Element",
  as: "a",
  href: "#"
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  children: "カスタムボタン",
  appearance: {
    fontSize: 16,
    backgroundColor: "#2196f3",
    color: "#ffffff"
  }
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  children: "Dark Button",
  appearance: {
    fontSize: 14,
    backgroundColor: "#333333",
    color: "#ffffff"
  }
};

export const Hovered = Template.bind({});
Hovered.args = {
  children: "Hovered State",
  isHovered: true
};

export const Interactive = Template.bind({});
Interactive.args = {
  children: "Interactive Button",
  onMouseEnter: () => console.log("Button hovered"),
  onMouseLeave: () => console.log("Button unhovered"),
  onClick: () => alert("Button clicked!")
};
