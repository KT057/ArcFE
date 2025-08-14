import type { Meta, StoryFn } from "@storybook/react";
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
    loop: true,
    slides: {
      perView: 2,
      spacing: 10
    }
  },
  items: [
    <div
      key="1"
      style={{
        backgroundColor: "red",
        height: "100px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      1
    </div>,
    <div
      key="2"
      style={{
        backgroundColor: "blue",
        height: "100px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      2
    </div>,
    <div
      key="3"
      style={{
        backgroundColor: "green",
        height: "100px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      3
    </div>,
    <div
      key="4"
      style={{
        backgroundColor: "green",
        height: "100px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      4
    </div>,
    <div
      key="5"
      style={{
        backgroundColor: "yellow",
        height: "100px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      5
    </div>,
    <div
      key="6"
      style={{
        backgroundColor: "purple",
        height: "100px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      6
    </div>
  ]
};
