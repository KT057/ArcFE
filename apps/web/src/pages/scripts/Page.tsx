import { Button001, FadeInAndZoomImages } from "@apps/ui/components";
import { GlobalStyles } from "@apps/ui/styles/global-style";
import { themes } from "@apps/ui/styles/themes";
import { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { getWpPosts } from "../../shared/wordpress/api/post";

const StyledPage = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 40px;
  border-radius: 10px;
`;

export const Page = () => {
  const getData = async () => {
    const posts = await getWpPosts({
      pagination: {
        page: 3,
        perPage: 1
      }
    });
    console.log(posts);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    getData();
  }, []);

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
