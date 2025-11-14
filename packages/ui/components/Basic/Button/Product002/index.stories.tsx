import type { Meta, StoryFn } from "@storybook/react";
import { Svg002Icon } from "../../Icons";
import { Button002 } from "./index";

export default {
  title: "Basic/Button/Product002",
  component: Button002,
  tags: ["autodocs"]
} as Meta<typeof Button002>;

const Template: StoryFn<typeof Button002> = (args) => (
  <div style={{ width: "300px" }}>
    <Button002 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Button",
  icon: <Svg002Icon />,
  animation: {
    type: "001",
    duration: 0.25,
    easing: "easeInOutCubic",
    backgroundColor: "#000",
    textColor: "#fff"
  },
  type: "001",
  size: "middle",
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000",
    fontWeight: 700
  }
};

export const Type002 = Template.bind({});
Type002.args = {
  children: "Button",
  icon: <Svg002Icon />,
  animation: {
    type: "001",
    duration: 0.25,
    easing: "easeInOutCubic",
    backgroundColor: "#000",
    textColor: "#fff"
  },
  type: "002",
  size: "middle",
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000",
    fontWeight: 700
  }
};

export const Type003 = Template.bind({});
Type003.args = {
  children: "Button",
  icon: <Svg002Icon />,
  animation: {
    type: "001",
    duration: 0.25,
    easing: "easeInOutCubic",
    backgroundColor: "#000",
    textColor: "#fff"
  },
  type: "003",
  size: "middle",
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000",
    fontWeight: 700
  }
};

export const Animation002 = Template.bind({});
Animation002.args = {
  children: "Button",
  icon: <Svg002Icon />,
  animation: {
    type: "002",
    duration: 0.25,
    easing: "easeInOutCubic",
    backgroundColor: "#000",
    textColor: "#fff"
  },
  type: "001",
  size: "middle",
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000",
    fontWeight: 700
  }
};

export const Animation003 = Template.bind({});
Animation003.args = {
  children: "Button",
  icon: <Svg002Icon />,
  animation: {
    type: "003",
    duration: 0.25,
    easing: "easeInOutCubic",
    backgroundColor: "#000",
    textColor: "#fff"
  },
  type: "001",
  size: "middle",
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000",
    fontWeight: 700
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  icon: <Svg002Icon />,
  type: "001",
  size: "middle",
  disabled: true,
  as: "span",
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000",
    fontWeight: 700,
    disabledColor: "#6c757d",
    disabledBackgroundColor: "#f8f9fa",
    disabledBorderColor: "#dee2e6"
  }
};

export const Animation004 = Template.bind({});
Animation004.args = {
  children: "Button",
  icon: <Svg002Icon />,
  animation: {
    type: "004",
    duration: 0.25,
    easing: "easeInOutCubic",
    backgroundColor: "#000",
    textColor: "#fff"
  },
  type: "001",
  size: "middle",
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000",
    fontWeight: 700
  }
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  children: "Custom Style Button",
  icon: <Svg002Icon />,
  type: "004",
  animation: {
    type: "003"
  },
  size: "middle",
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000",
    fontSize: 19,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    fontWeight: 700,
    iconSize: 30
  }
};
