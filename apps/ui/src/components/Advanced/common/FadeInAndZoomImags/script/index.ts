import gsap from "gsap";

export const videoAnimation = () => {
  const videos = document.querySelectorAll<HTMLVideoElement>(
    ".js-rebita-video-animation"
  );

  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -10% 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const video = entry.target as HTMLVideoElement;
      const wrapper = video.closest(".cm-rebita-video-animation__wrapper");

      if (entry.isIntersecting) {
        video.play().catch((error) => {
          console.warn("Video autoplay failed:", error);
        });

        if (wrapper) {
          gsap.fromTo(
            video,
            {
              scale: 0.8,
              opacity: 0
            },
            {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out"
            }
          );
        }
      } else {
        video.pause();
      }
    }
  }, observerOptions);

  for (const video of videos) {
    observer.observe(video);

    video.addEventListener("loadeddata", () => {
      video.muted = true;
    });

    video.addEventListener("error", (e) => {
      console.error("Video loading error:", e);
    });
  }

  return () => {
    observer.disconnect();
  };
};
