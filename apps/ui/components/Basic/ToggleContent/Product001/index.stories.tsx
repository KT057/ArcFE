import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { ToggleContent001 } from "./index";

const meta: Meta<typeof ToggleContent001> = {
  title: "Basic/ToggleContent/Product001",
  component: ToggleContent001,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof ToggleContent001> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      <ToggleContent001 {...args} isOpen={isOpen}>
        <div>Content</div>
      </ToggleContent001>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
