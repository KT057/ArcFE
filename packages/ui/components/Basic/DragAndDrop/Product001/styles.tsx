import styled from "styled-components";

export const StyledListWrapper = styled.div`
  ${({ theme }) => theme.font.baseSize.em()};

  width: 100%;
`;

export const StyledList = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "gap"
})<{
  gap?: number;
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, gap }) => theme.size.em(gap ?? 0)};
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledListItem = styled.li
  .withConfig({
    shouldForwardProp: (prop) => prop !== "isDragging"
  })
  .attrs<{
    isDragging: boolean;
    x: number;
    y: number;
    transition: string;
  }>((props) => ({
    style: {
      transform: `translate(${props.x}px, ${props.y}px)`,
      transition: `${props.transition}, opacity 0.2s ${props.theme.animation.easing.easeInOutSine}`
    }
  }))<{
  isDragging: boolean;
}>`
  cursor: grab;
  opacity: ${(props) => (props.isDragging ? 0.5 : 1)};

  &:active {
    cursor: grabbing;
  }
`;
