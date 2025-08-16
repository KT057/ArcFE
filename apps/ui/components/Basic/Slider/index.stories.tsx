import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Svg004Icon } from "../Icons";
import { Slider } from "./index";

// Reference: https://keen-slider.io/examples

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
          slides: { perView: 2, spacing: 10 },
          created: () => {
            setLoading(false);
          }
        }}
      />
    );
  },
  args: {
    controller: {
      left: {
        children: (
          <div style={{ transform: "rotate(180deg)" }}>
            <Svg004Icon />
          </div>
        ),
        style: {
          size: 60,
          position: -50,
          color: "#000",
          hoverColor: "#ccc",
          disableOpacity: 0.5
        }
      },
      right: {
        children: <Svg004Icon />,
        style: {
          size: 60,
          position: -50,
          color: "#000",
          hoverColor: "#ccc",
          disableOpacity: 0.5
        }
      }
    },
    dots: {
      show: true
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

const animation = { duration: 10000, easing: (t: number) => t };

export const Loop = Template.bind({});
Loop.args = {
  options: {
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
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

export const AutoPlay = Template.bind({});
AutoPlay.args = {
  autoPlay: {
    active: true,
    interval: 1000
  },
  options: {
    loop: true
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
