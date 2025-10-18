import type { Meta, StoryFn } from "@storybook/react";
import { Loading001 } from "./index";

const meta: Meta<typeof Loading001> = {
  title: "Basic/Loading/Product001",
  component: Loading001,
  tags: ["autodocs"],
  parameters: {
    screenshot: {
      skip: true
    }
  }
};

export default meta;

const Template: StoryFn<typeof Loading001> = (args) => (
  <div style={{ padding: "20px" }}>
    <Loading001 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  type: "001",
  size: "large"
};

export const Small = Template.bind({});
Small.args = {
  type: "001",
  size: "small"
};

export const Middle = Template.bind({});
Middle.args = {
  type: "001",
  size: "middle"
};
