import styled from "styled-components";

export const StyledContentFooter = styled.div`
  padding-top: ${({ theme }) => theme.size.em(20)};
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.size.em(10)};
`;
