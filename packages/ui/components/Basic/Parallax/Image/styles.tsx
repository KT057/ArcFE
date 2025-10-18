import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  
  ${({ theme }) => theme.font.baseSize.em()}
`;
