import type { Meta, StoryFn } from "@storybook/react";
import { Button001 } from "../../Button";
import { List001 } from "../../List";
import { ListItem002 } from "../../ListItem";
import { DropdownMenu001 } from "./index";

export default {
	title: "Basic/DropdownMenu/Product001",
	component: DropdownMenu001,
	tags: ["autodocs"],
} as Meta<typeof DropdownMenu001>;

const Template: StoryFn<typeof DropdownMenu001> = (args) => (
	<div style={{ width: "300px", display: "flex", justifyContent: "center" }}>
		<DropdownMenu001 {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	contents: <Button001>ボタン</Button001>,
	detail: (
		<List001
			items={[
				{
					content: (
						<ListItem002 onClick={() => null}>リストアイテム1</ListItem002>
					),
					id: "1",
				},
				{
					content: (
						<ListItem002 onClick={() => null}>リストアイテム2</ListItem002>
					),
					id: "2",
				},
				{
					content: (
						<ListItem002 onClick={() => null}>リストアイテム3</ListItem002>
					),
					id: "3",
				},
				{
					content: (
						<ListItem002 onClick={() => null}>リストアイテム4</ListItem002>
					),
					id: "4",
				},
			]}
			type="001"
		/>
	),
};
