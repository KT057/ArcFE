import gsap from "gsap";

export const verticalRollingText = () => {
  const items = document.querySelectorAll<HTMLElement>(
    ".js-vertical-rolling-text-wrapper"
  );

  // Todo: 連続ホバーした時の挙動
  for (const item of Array.from(items)) {
    item.addEventListener("mouseenter", () => {
      const contents = item.querySelector<HTMLElement>(
        ".js-vertical-rolling-text-contents"
      );

      if (!contents) return;

      gsap.set(contents, {
        transform: "translateY(0)"
      });

      gsap.to(contents, {
        duration: 0.4,
        transform: "translateY(-50%)",
        ease: "power2.inOut"
      });
    });
  }
};
