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

interface ListItemWithContent {
  id: string;
  content: React.ReactNode;
}

interface ListItem {
  id: string;
}

interface SortableItemProps {
  id: string;
  children: React.ReactNode;
  borderColor?: string;
}

const SortableItem = ({ id, children }: SortableItemProps) => {
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
  items: ListItemWithContent[];
  appearance?: {
    gap?: number;
  };
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
