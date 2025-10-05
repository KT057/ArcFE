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
  children: "Button ssss",
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
  style: {
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
  style: {
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
  style: {
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
  style: {
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
  style: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000",
    fontWeight: 700
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
  style: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000",
    fontWeight: 700
  }
};
