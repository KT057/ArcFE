import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Button001 } from "../../Button";
import { List001 } from "../../List";
import { Toggle002 } from "../../Toggle";
import { ToggleSomething001 } from "../../ToggleSomething/Product001";
import { Header001 } from "./index";

export default {
  title: "Basic/Header/Product001",
  component: Header001,
  tags: ["autodocs"]
} as Meta<typeof Header001>;

const Template: StoryFn<typeof Header001> = (args) => (
  <div style={{ width: "300px" }}>
    <Header001 {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  left: <div style={{ color: "#fff", fontSize: "16px" }}>LOGO</div>,
  right: (
    <List001
      style={{
        rowGap: 10
      }}
      items={[
        {
          content: (
            <div style={{ width: "200px" }}>
              <Button001
                animation={{
                  backgroundColor: "#000",
                  duration: 0.25,
                  easing: "easeInOutCubic",
                  textColor: "#fff",
                  type: "001"
                }}
                onClick={() => {}}
                size="small"
                style={{
                  backgroundColor: "#fff",
                  borderColor: "#000",
                  color: "#000",
                  fontWeight: 700
                }}
                type="003"
              >
                ログイン
              </Button001>
            </div>
          ),
          id: "1"
        },
        {
          content: (
            <div style={{ width: "200px" }}>
              <Button001
                animation={{
                  backgroundColor: "#000",
                  duration: 0.25,
                  easing: "easeInOutCubic",
                  textColor: "#fff",
                  type: "001"
                }}
                onClick={() => {}}
                size="small"
                style={{
                  backgroundColor: "#fff",
                  borderColor: "#000",
                  color: "#000",
                  fontWeight: 700
                }}
                type="003"
              >
                資料請求
              </Button001>
            </div>
          ),
          id: "2"
        }
      ]}
      type="003"
    />
  ),
  rightInner: (
    <List001
      items={[
        {
          content: (
            <div style={{ color: "#fff", fontSize: "12px" }}>
              リストアイテム1
            </div>
          ),
          id: "1"
        },
        {
          content: (
            <div style={{ color: "#fff", fontSize: "12px" }}>
              リストアイテム2
            </div>
          ),
          id: "2"
        },
        {
          content: (
            <div style={{ color: "#fff", fontSize: "12px" }}>
              リストアイテム3
            </div>
          ),
          id: "3"
        },
        {
          content: (
            <div style={{ color: "#fff", fontSize: "12px" }}>
              リストアイテム4
            </div>
          ),
          id: "4"
        }
      ]}
      type="003"
    />
  ),
  style: {
    rightGap: 40,
    header: {
      backgroundColor: "#000"
    }
  }
};

export const Modal: StoryFn<typeof Header001> = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Header001
      showModal={showModal}
      left={
        <ToggleSomething001 isOpen={!showModal}>
          <div style={{ color: "#fff", fontSize: "16px" }}>LOGO</div>
        </ToggleSomething001>
      }
      right={
        <Toggle002
          isOpen={showModal}
          onClick={() => {
            setShowModal(!showModal);
          }}
          style={{
            lineColor: "#fff"
          }}
        />
      }
      modalContent={
        <ToggleSomething001
          isOpen={showModal}
          style={{
            width: "100%",
            height: "100%"
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#000",
              color: "#fff"
            }}
          >
            Modal
          </div>
        </ToggleSomething001>
      }
      style={{
        header: {
          backgroundColor: "#000",
          animation: {
            backgroundColor: "#000"
          }
        }
      }}
    />
  );
};
