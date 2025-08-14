import type { Meta, StoryFn } from "@storybook/react";
import { Svg001Icon } from "../../../Basic/Icons";
import { RebitaTextButtonWithIcon } from "./index";

const meta: Meta<typeof RebitaTextButtonWithIcon> = {
  title: "Advanced/Rebita/TextButtonWithIcon",
  component: RebitaTextButtonWithIcon
};

export default meta;

const Template: StoryFn<typeof RebitaTextButtonWithIcon> = (args) => (
  <div
    style={{
      padding: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <RebitaTextButtonWithIcon {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  icon: <Svg001Icon />
};

export const Left = Template.bind({});
Left.args = {
  icon: <Svg001Icon />,
  iconDirection: "left"
};

export const CustomText = Template.bind({});
CustomText.args = {
  text: "カスタムテキストボタン",
  icon: <Svg001Icon />
};

export const ButtonElement = Template.bind({});
ButtonElement.args = {
  as: "button",
  text: "Button Element",
  icon: <Svg001Icon />,
  onClick: () => alert("Text button with icon clicked!")
};

export const LinkElement = Template.bind({});
LinkElement.args = {
  as: "a",
  href: "#",
  text: "Link Element",
  icon: <Svg001Icon />
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  text: "カスタムスタイル",
  icon: <Svg001Icon />,
  style: {
    fontSize: 18,
    color: "#2196f3"
  }
};

export const LongText = Template.bind({});
LongText.args = {
  text: "これは非常に長いテキストボタンの例です",
  icon: <Svg001Icon />,
  style: {
    fontSize: 14
  }
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  text: "アイコンなしのテキスト",
  icon: null
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  text: "カスタムアイコン",
  icon: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
};

export const Interactive = Template.bind({});
Interactive.args = {
  text: "ホバーしてアニメーションを確認",
  icon: <Svg001Icon />,
  onClick: () => console.log("Button clicked!"),
  style: {
    color: "#22c55e"
  }
};
