import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton001 } from "./index";

const meta: Meta<typeof Skeleton001> = {
  title: "Basic/Skeleton/Product001",
  component: Skeleton001,
  parameters: {
    layout: "centered",
    screenshot: {
      skip: true
    }
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["001"]
    },
    style: {
      control: { type: "object" }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Skeleton001>;

export const Default: Story = {
  args: {
    type: "001",
    style: {
      width: "200px",
      height: "20px"
    }
  }
};

export const Card: Story = {
  args: {
    type: "001",
    style: {
      width: "300px",
      height: "150px",
      borderRadius: "8px"
    }
  }
};

export const Avatar: Story = {
  args: {
    type: "001",
    style: {
      width: "64px",
      height: "64px",
      borderRadius: "50%"
    }
  }
};

export const Multiple: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "400px"
      }}
    >
      <Skeleton001 style={{ height: "24px", borderRadius: "4px" }} />
      <Skeleton001
        style={{ height: "24px", width: "80%", borderRadius: "4px" }}
      />
      <Skeleton001
        style={{ height: "24px", width: "60%", borderRadius: "4px" }}
      />
      <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
        <Skeleton001
          style={{ width: "64px", height: "64px", borderRadius: "50%" }}
        />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}
        >
          <Skeleton001 style={{ height: "16px", borderRadius: "4px" }} />
          <Skeleton001
            style={{ height: "16px", width: "70%", borderRadius: "4px" }}
          />
        </div>
      </div>
    </div>
  )
};
