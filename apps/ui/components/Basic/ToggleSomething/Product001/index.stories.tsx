import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { ToggleSomething001 } from "./index";

const meta: Meta<typeof ToggleSomething001> = {
  title: "Basic/ToggleSomething/Product001",
  component: ToggleSomething001,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof ToggleSomething001> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      <ToggleSomething001 {...args} isOpen={isOpen}>
        <div>Content</div>
      </ToggleSomething001>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
