import { Button001, FadeInAndZoomImages } from "@packages/ui";

export const About = () => {
  return (
    <>
      <Button001>ボタン</Button001>
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
    </>
  );
};
