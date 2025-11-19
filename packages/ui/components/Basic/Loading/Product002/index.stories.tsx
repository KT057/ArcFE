import type { Meta, StoryFn } from "@storybook/react";
import { Loading002 } from "./index";

const meta: Meta<typeof Loading002> = {
  title: "Basic/Loading/Product002",
  component: Loading002,
  tags: ["autodocs"],
  parameters: {
    screenshot: {
      skip: true
    }
  }
};

export default meta;

const Template: StoryFn<typeof Loading002> = (args) => (
  <div style={{ padding: "20px" }}>
    <Loading002 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: "large"
};

export const Small = Template.bind({});
Small.args = {
  size: "small"
};

export const Middle = Template.bind({});
Middle.args = {
  size: "middle"
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  size: "large",
  appearance: {
    indicatorColor: "#ff6b6b",
    backgroundColor: "#e0e0e0"
  }
};
