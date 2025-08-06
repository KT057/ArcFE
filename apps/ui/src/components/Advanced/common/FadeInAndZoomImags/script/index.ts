import gsap from "gsap";

const fadeInAndZoomImagesAnimation = ({nextIndex, images, image}: {nextIndex: () => number, images: HTMLDivElement[], image: HTMLDivElement}) => {
  gsap.fromTo(image, {
    scale: 1,
    opacity: 1,
    zIndex: 0
  }, {
    scale: 1.4,
    opacity: 1,
    duration: 1.6,
    ease: "power2.out",
    onComplete: () => {
      const index = nextIndex();
      const nextImage = images[index];
      image.style.zIndex = "1";
      gsap.to(image, {
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        onComplete: () => {
          image.style.zIndex = "0"
        }
      });
      fadeInAndZoomImagesAnimation({nextIndex, images, image: nextImage});
    }
  });
}

export const fadeInAndZoomImages = () => {
  let currentIndex = 0;
  const imageWrappers = document.querySelectorAll<HTMLDivElement>(".js-fade-in-and-zoom-images-wrapper");

  for (const imageWrapper of Array.from(imageWrappers)) {
    const images = Array.from(imageWrapper.querySelectorAll<HTMLDivElement>(".cm-fade-in-and-zoom-images__content"));

    const maxIndexes = images.length - 1;

    const nextIndex = () => {
      if (currentIndex >= maxIndexes) { 
        currentIndex = 0;
      } else {
        currentIndex++;
      }
  
      return currentIndex;
    }

    if (images) {
      const firstImage = images[0]
      if (!firstImage) return;
      console
      fadeInAndZoomImagesAnimation({nextIndex, images, image: firstImage});
    }
  }
};
