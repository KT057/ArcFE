import styled from "styled-components";

export const Footer = () => {
  return <StyledFooter>Footer</StyledFooter>;
};

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 20px;
`;
