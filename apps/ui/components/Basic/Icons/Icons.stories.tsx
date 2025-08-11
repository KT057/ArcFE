import type { Meta, StoryFn } from "@storybook/react";
import { StorybookComponent } from "./StorybookComponent";

export default {
  title: "Basic/Icons",
  component: StorybookComponent
} as Meta<typeof StorybookComponent>;

const Template: StoryFn<typeof StorybookComponent> = () => (
  <StorybookComponent />
);

export const Default = Template.bind({});
