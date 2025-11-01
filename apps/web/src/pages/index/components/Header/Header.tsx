import styled from "styled-components";

export const Header = () => {
  return <StyledHeader>Header</StyledHeader>;
};

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 20px;
`;
