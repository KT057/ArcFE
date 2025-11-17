import type { Meta, StoryFn } from "@storybook/react";
import { Balloon002 } from "./index";

export default {
  title: "Basic/Balloon/Product002",
  component: Balloon002,
  tags: ["autodocs"]
} as Meta<typeof Balloon002>;

const Template: StoryFn<typeof Balloon002> = (args) => (
  <div style={{ width: "300px" }}>
    <Balloon002 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Balloon",
  type: "001",
  appearance: {
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 16,
    borderColor: "#000",
    borderWidth: 1
  }
};
