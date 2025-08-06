import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline"]
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"]
    },
    onClick: { action: "clicked" }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button"
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button"
  }
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button"
  }
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Button"
  }
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Button"
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Button"
  }
};
