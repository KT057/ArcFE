import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Svg004Icon } from "../Icons";
import { Slider } from "./index";

const meta: Meta<typeof Slider> = {
  title: "Basic/Slider",
  component: Slider,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: {
    slides: {
      perView: 1,
      spacing: 10
    }
  },
  items: [
    {
      key: "1",
      children: (
        <div style={{ backgroundColor: "red", width: "100%", height: "300px" }}>
          1
        </div>
      )
    },
    {
      key: "2",
      children: (
        <div
          style={{ backgroundColor: "blue", width: "100%", height: "300px" }}
        >
          2
        </div>
      )
    },
    {
      key: "3",
      children: (
        <div
          style={{ backgroundColor: "green", width: "100%", height: "300px" }}
        >
          3
        </div>
      )
    },
    {
      key: "4",
      children: (
        <div
          style={{ backgroundColor: "yellow", width: "100%", height: "300px" }}
        >
          4
        </div>
      )
    },
    {
      key: "5",
      children: (
        <div
          style={{ backgroundColor: "purple", width: "100%", height: "300px" }}
        >
          5
        </div>
      )
    },
    {
      key: "6",
      children: (
        <div
          style={{ backgroundColor: "orange", width: "100%", height: "300px" }}
        >
          6
        </div>
      )
    }
  ]
};

export const Navigation: StoryObj<typeof Slider> = {
  render: (args) => {
    const [loading, setLoading] = useState(true);

    return (
      <Slider
        {...args}
        loading={loading}
        options={{
          slides: { perView: 1, spacing: 10 },
          created: () => {
            setLoading(false);
          }
        }}
      />
    );
  },
  args: {
    controller: {
      left: (
        <div
          style={{
            transform: "rotate(180deg)"
          }}
        >
          <Svg004Icon />
        </div>
      ),
      right: <Svg004Icon />
    },
    items: [
      {
        key: "1",
        children: (
          <div
            style={{ backgroundColor: "red", width: "100%", height: "300px" }}
          >
            1
          </div>
        )
      },
      {
        key: "2",
        children: (
          <div
            style={{ backgroundColor: "blue", width: "100%", height: "300px" }}
          >
            2
          </div>
        )
      },
      {
        key: "3",
        children: (
          <div
            style={{ backgroundColor: "green", width: "100%", height: "300px" }}
          >
            3
          </div>
        )
      },
      {
        key: "4",
        children: (
          <div
            style={{
              backgroundColor: "yellow",
              width: "100%",
              height: "300px"
            }}
          >
            4
          </div>
        )
      },
      {
        key: "5",
        children: (
          <div
            style={{
              backgroundColor: "purple",
              width: "100%",
              height: "300px"
            }}
          >
            5
          </div>
        )
      },
      {
        key: "6",
        children: (
          <div
            style={{
              backgroundColor: "orange",
              width: "100%",
              height: "300px"
            }}
          >
            6
          </div>
        )
      }
    ]
  }
};
