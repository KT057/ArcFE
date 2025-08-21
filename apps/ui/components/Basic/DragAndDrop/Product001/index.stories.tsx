import type { Meta, StoryFn } from "@storybook/react";
import { useMemo, useState } from "react";
import { DragAndDrop001 } from "./index";

export default {
  title: "Basic/DragAndDrop/Product001",
  component: DragAndDrop001,
  tags: ["autodocs"]
} as Meta<typeof DragAndDrop001>;

const Template: StoryFn<typeof DragAndDrop001> = (args) => {
  const [items, setItems] = useState(
    args.items.map((item) => ({ id: item.id }))
  );

  const listItems = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      content: args.items.find((i) => i.id === item.id)?.content
    }));
  }, [items, args.items]);

  return (
    <div style={{ width: "400px", padding: "20px" }}>
      <DragAndDrop001 {...args} items={listItems} onReorder={setItems} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: "1",
      content: <div>アイテム 1</div>
    },
    {
      id: "2",
      content: <div>アイテム 2</div>
    },
    {
      id: "3",
      content: <div>アイテム 3</div>
    },
    {
      id: "4",
      content: <div>アイテム 4</div>
    }
  ],
  style: {
    gap: 8
  }
};

export const WithComplexContent: StoryFn<typeof DragAndDrop001> = () => {
  const [items, setItems] = useState([
    {
      id: "task-1",
      test: "test"
    },
    {
      id: "task-2",
      test: "test"
    },
    {
      id: "task-3",
      test: "test"
    }
  ]);

  const listItems = useMemo(() => {
    return items.map((item) => {
      switch (item.id) {
        case "task-1":
          return {
            id: item.id,
            content: (
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#4caf50",
                    borderRadius: "50%"
                  }}
                />
                <div>
                  <div style={{ fontWeight: "bold" }}>完了済みタスク</div>
                  <div style={{ fontSize: "12px", color: "#666" }}>
                    詳細説明がここに入ります
                  </div>
                </div>
              </div>
            )
          };
        case "task-2":
          return {
            id: item.id,
            content: (
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#ff9800",
                    borderRadius: "50%"
                  }}
                />
                <div>
                  <div style={{ fontWeight: "bold" }}>進行中タスク</div>
                  <div style={{ fontSize: "12px", color: "#666" }}>
                    現在作業中のタスクです
                  </div>
                </div>
              </div>
            )
          };
        case "task-3":
          return {
            id: item.id,
            content: (
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "#f44336",
                    borderRadius: "50%"
                  }}
                />
                <div>
                  <div style={{ fontWeight: "bold" }}>未完了タスク</div>
                  <div style={{ fontSize: "12px", color: "#666" }}>
                    まだ着手していません
                  </div>
                </div>
              </div>
            )
          };
        default:
          return {
            id: item.id,
            content: null
          };
      }
    });
  }, [items]);

  return (
    <div style={{ width: "500px", padding: "20px" }}>
      <h3>タスク管理</h3>
      <DragAndDrop001
        items={listItems}
        onReorder={(newItems) => {
          setItems(
            newItems.map((newItem) => {
              const findItem = items.find((item) => item.id === newItem.id);
              if (!findItem) {
                throw new Error("Item not found");
              }
              return findItem;
            })
          );
        }}
        style={{
          gap: 8
        }}
      />
    </div>
  );
};
