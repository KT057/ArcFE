import type { Meta, StoryFn } from "@storybook/react";
import { Button001 } from "./index";

export default {
  title: "Basic/Button/Product001",
  component: Button001,
  tags: ["autodocs"]
} as Meta<typeof Button001>;

const Template: StoryFn<typeof Button001> = (args) => (
  <div style={{ width: "300px" }}>
    <Button001 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "test",
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

export const Animation002 = Template.bind({});
Animation002.args = {
  children: "Button",
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

export const Type002 = Template.bind({});
Type002.args = {
  children: "Type002 Button",
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
  children: "Type003 Button",
  type: "003",
  size: "middle",
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000",
    fontWeight: 700
  }
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  children: "Small Button",
  type: "001",
  size: "small",
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000",
    fontWeight: 700
  }
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  children: "Large Button",
  type: "001",
  size: "large",
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000",
    fontWeight: 700
  }
};

export const PrimaryTheme = Template.bind({});
PrimaryTheme.args = {
  children: "Primary",
  type: "001",
  size: "middle",
  appearance: {
    backgroundColor: "#007bff",
    borderColor: "#0056b3",
    color: "#fff",
    fontWeight: 700
  }
};

export const DangerTheme = Template.bind({});
DangerTheme.args = {
  children: "Danger",
  type: "001",
  size: "middle",
  appearance: {
    backgroundColor: "#dc3545",
    borderColor: "#c82333",
    color: "#fff",
    fontWeight: 700
  }
};

export const SuccessTheme = Template.bind({});
SuccessTheme.args = {
  children: "Success",
  type: "001",
  size: "middle",
  appearance: {
    backgroundColor: "#28a745",
    borderColor: "#1e7e34",
    color: "#fff",
    fontWeight: 700
  }
};

export const WithoutAnimation = Template.bind({});
WithoutAnimation.args = {
  children: "No Animation",
  type: "001",
  size: "middle",
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000",
    fontWeight: 700
  }
};

export const LongText = Template.bind({});
LongText.args = {
  children: "This is a very long button text",
  type: "001",
  size: "middle",
  appearance: {
    backgroundColor: "#fff",
    borderColor: "#000",
    color: "#000",
    fontWeight: 700
  }
};

export const LightWeight = Template.bind({});
LightWeight.args = {
  children: "Light Weight",
  type: "001",
  size: "middle",
  appearance: {
    backgroundColor: "#f8f9fa",
    borderColor: "#dee2e6",
    color: "#495057",
    fontWeight: 400
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  type: "001",
  size: "middle",
  disabled: true,
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

export const AsLink = Template.bind({});
AsLink.args = {
  as: "a",
  href: "#",
  children: "Link Button",
  type: "001",
  size: "middle",
  appearance: {
    backgroundColor: "#6f42c1",
    borderColor: "#5a3a9e",
    color: "#fff",
    fontWeight: 700
  }
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  children: "Custom Style Button",
  type: "001",
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
    fontWeight: 700
  }
};
