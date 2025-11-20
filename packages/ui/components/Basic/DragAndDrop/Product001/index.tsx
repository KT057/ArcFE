import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import type React from "react";
import { useCallback, useMemo } from "react";
import { StyledList, StyledListItem, StyledListWrapper } from "./styles";

/**
 * リストアイテム（表示コンテンツを含む）
 */
interface ListItemWithContent {
  /**
   * 一意なID
   */
  id: string;
  /**
   * 表示内容
   */
  content: React.ReactNode;
}

/**
 * リストアイテム（IDのみ）
 */
interface ListItem {
  /**
   * 一意なID
   */
  id: string;
}

interface InternalSortableItemProps {
  /**
   * id 属性
   */
  id: string;
  /**
   * 表示内容
   */
  children: React.ReactNode;
  /**
   * borderColor の値
   */
  borderColor?: string;
}

const SortableItem = ({ id, children }: InternalSortableItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id });

  return (
    <StyledListItem
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      isDragging={isDragging}
      x={transform?.x ?? 0}
      y={transform?.y ?? 0}
      transition={transition ?? "none"}
    >
      {children}
    </StyledListItem>
  );
};

interface DragAndDropProps {
  /**
   * ドラッグ&ドロップ可能なアイテムの配列
   */
  items: ListItemWithContent[];
  /**
   * 外観をカスタマイズ
   */
  appearance?: {
    /**
     * アイテム間の間隔（px）
     */
    gap?: number;
  };
  /**
   * アイテムの順序が変更されたときのコールバック関数
   */
  onReorder: (items: ListItem[]) => void;
}

export const DragAndDrop001 = ({
  items,
  appearance,
  onReorder
}: DragAndDropProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );

  const dependencies = useMemo(
    () => items.map((item) => ({ id: item.id })),
    [items]
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: 依存関係を最小限にするため
  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (active.id !== over?.id) {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);

        const newItems = [...items];
        const [movedItem] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, movedItem);

        onReorder(newItems.map((item) => ({ id: item.id })));
      }
    },
    [dependencies]
  );

  return (
    <StyledListWrapper>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          <StyledList as="ul" gap={appearance?.gap}>
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id}>
                {item.content}
              </SortableItem>
            ))}
          </StyledList>
        </SortableContext>
      </DndContext>
    </StyledListWrapper>
  );
};
