import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { RebitaToggle } from "./index";

const meta: Meta<typeof RebitaToggle> = {
  title: "Advanced/Rebita/Toggle",
  component: RebitaToggle,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof RebitaToggle> = (args) => (
  <div
    style={{
      padding: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <RebitaToggle {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const OpenState = Template.bind({});
OpenState.args = {
  isOpen: true
};

export const CloseState = Template.bind({});
CloseState.args = {
  isOpen: false
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  style: {
    backgroundColor: "#2196f3",
    dotColor: "#ffffff",
    lineColor: "#ffffff"
  }
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  style: {
    backgroundColor: "#1f2937",
    dotColor: "#f3f4f6",
    lineColor: "#f3f4f6"
  }
};

export const ColorfulTheme = Template.bind({});
ColorfulTheme.args = {
  style: {
    backgroundColor: "#10b981",
    dotColor: "#ffffff",
    lineColor: "#ffffff"
  }
};

const InteractiveTemplate: StoryFn<typeof RebitaToggle> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <div style={{ marginBottom: "20px" }}>
        <p>Current state: {isOpen ? "Open" : "Closed"}</p>
      </div>
      <RebitaToggle
        isOpen={isOpen}
        onChange={(newState) => setIsOpen(newState)}
      />
    </div>
  );
};

export const Interactive = InteractiveTemplate.bind({});

const MultipleTogglesTemplate: StoryFn<typeof RebitaToggle> = () => {
  const [toggles, setToggles] = useState([false, false, false]);

  const handleToggleChange = (index: number, newState: boolean) => {
    const newToggles = [...toggles];
    newToggles[index] = newState;
    setToggles(newToggles);
  };

  return (
    <div style={{ padding: "50px" }}>
      <h3>Multiple Toggles</h3>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "20px"
        }}
      >
        {toggles.map((isOpen, index) => (
          <div key={index} style={{ textAlign: "center" }}>
            <RebitaToggle
              isOpen={isOpen}
              onChange={(newState) => handleToggleChange(index, newState)}
              style={{
                backgroundColor: isOpen ? "#22c55e" : "#6b7280"
              }}
            />
            <p style={{ marginTop: "10px", fontSize: "14px" }}>
              Toggle {index + 1}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const MultipleToggles = MultipleTogglesTemplate.bind({});

export const WithCallback = Template.bind({});
WithCallback.args = {
  onChange: (isOpen: boolean) => {
    console.log("Toggle changed to:", isOpen);
    alert(`Toggle is now ${isOpen ? "open" : "closed"}`);
  },
  onClick: () => {
    console.log("Toggle clicked!");
  }
};
