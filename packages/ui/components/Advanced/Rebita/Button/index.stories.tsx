import type { Meta, StoryFn } from "@storybook/react";
import { Svg007Icon } from "../../../Basic/Icons";
import { RebitaButton } from "./index";

const meta: Meta<typeof RebitaButton> = {
  title: "Advanced/Rebita/Button",
  component: RebitaButton,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof RebitaButton> = (args) => (
  <div
    style={{
      padding: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <RebitaButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  text: "ボタン",
  icon: <Svg007Icon />
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  text: "Large Button",
  icon: <Svg007Icon />
};

export const Middle = Template.bind({});
Middle.args = {
  size: "middle",
  text: "Middle Button",
  icon: <Svg007Icon />
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  text: "Small Button",
  icon: <Svg007Icon />
};

export const LeftDirection = Template.bind({});
LeftDirection.args = {
  direction: "left",
  text: "Left Direction",
  icon: <Svg007Icon />
};

export const ButtonElement = Template.bind({});
ButtonElement.args = {
  as: "button",
  text: "Button Element",
  icon: <Svg007Icon />,
  onClick: () => alert("Rebita button clicked!")
};

export const LinkElement = Template.bind({});
LinkElement.args = {
  as: "a",
  href: "#",
  text: "Link Element",
  icon: <Svg007Icon />
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  text: "Custom Colors",
  icon: <Svg007Icon />,
  style: {
    fontSize: 14,
    backgroundColor: "#2196f3",
    textColor: "#ffffff",
    iconColor: "#ffffff",
    borderColor: "#2196f3",
    leftContentBorderColor: "rgba(255, 255, 255, 0.3)"
  }
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  text: "Dark Theme",
  icon: <Svg007Icon />,
  style: {
    fontSize: 13,
    backgroundColor: "#333333",
    textColor: "#ffffff",
    iconColor: "#ffffff",
    borderColor: "#555555",
    leftContentBorderColor: "#666666"
  }
};

export const WithAnimation = Template.bind({});
WithAnimation.args = {
  text: "Hover for Animation",
  icon: <Svg007Icon />,
  style: {
    backgroundColor: "#2196f3",
    textColor: "#ffffff",
    iconColor: "#ffffff",
    borderColor: "#2196f3",
    leftContentBorderColor: "rgba(255, 255, 255, 0.3)"
  }
};
