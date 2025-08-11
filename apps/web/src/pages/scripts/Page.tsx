import { FadeInAndZoomImages } from "@apps/ui/components/Advanced/common/FadeInAndZoomImages";
import { Button001 } from "@apps/ui/components/Basic/Button/Product001";
import { GlobalStyles } from "@apps/ui/styles/global-style";
import { themes } from "@apps/ui/styles/themes";
import styled, { ThemeProvider } from "styled-components";

const StyledPage = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 40px;
  border-radius: 10px;
`;
export const Page = () => {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <StyledPage>
        <Button001>Home Page</Button001>
        <FadeInAndZoomImages
          images={[
            {
              src: "/images/img-01.jpg",
              alt: "image01"
            },
            {
              src: "/images/img-02.jpg",
              alt: "image02"
            },
            {
              src: "/images/img-03.jpg",
              alt: "image03"
            }
          ]}
        />
      </StyledPage>
    </ThemeProvider>
  );
};
