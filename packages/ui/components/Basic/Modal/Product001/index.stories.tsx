import type { Meta, StoryFn } from "@storybook/react";
import { Button001 } from "../../Button";
import { FooterButtons } from "../Footer/Buttons";
import { Modal001 } from "./index";

const meta: Meta<typeof Modal001> = {
  title: "Basic/Modal/Product001",
  component: Modal001,
  tags: ["autodocs"]
};

export default meta;

const Template: StoryFn<typeof Modal001> = (args) => (
  <div style={{ padding: "20px", height: "600px" }}>
    <Modal001 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  showModal: true,
  children: (
    <div style={{ height: "200px" }}>
      Modal ContentModal ContentModal ContentModal ContentModal ContentModal
      ContentModal ContentModal ContentModal ContentModal ContentModal Content
    </div>
  ),
  footer: (
    <FooterButtons>
      <Button001 onClick={() => {}} size="small" fullWidth={false} type="003">
        キャンセル
      </Button001>
      <Button001
        onClick={() => {}}
        size="small"
        appearance={{
          backgroundColor: "#000",
          borderColor: "#000",
          color: "#fff",
          fontWeight: 700
        }}
        animation={{
          type: "001",
          backgroundColor: "#fff",
          textColor: "#000"
        }}
        fullWidth={false}
        type="003"
      >
        確定
      </Button001>
    </FooterButtons>
  )
};

export const ContentLongHeight = Template.bind({});
ContentLongHeight.args = {
  showModal: true,
  children: <div style={{ height: "1000px" }}>Modal ContentModal</div>,
  footer: (
    <FooterButtons>
      <Button001
        onClick={() => {}}
        size="small"
        appearance={{
          backgroundColor: "#fff",
          borderColor: "#000",
          color: "#000",
          fontWeight: 700
        }}
        type="003"
      >
        確定
      </Button001>
    </FooterButtons>
  )
};
