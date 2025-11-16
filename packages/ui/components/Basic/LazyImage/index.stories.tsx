import type { Meta, StoryFn } from "@storybook/react";
import { LazyImage } from "./index";

export default {
  title: "Basic/LazyImage",
  component: LazyImage,
  tags: ["autodocs"]
} as Meta<typeof LazyImage>;

const Template: StoryFn<typeof LazyImage> = (args) => (
  <div>
    {/* スクロールを作るためのスペーサー */}
    <div style={{ height: "100vh", background: "#f0f0f0", padding: "20px" }}>
      <h2>Scroll down to see the lazy-loaded image with fade-in animation</h2>
      <p>The image will load when it comes into view</p>
    </div>

    {/* LazyImageコンポーネント */}
    <div style={{ padding: "20px" }}>
      <LazyImage {...args} />
    </div>

    {/* 下部のスペーサー */}
    <div style={{ height: "50vh", background: "#e0e0e0" }} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  pc: {
    src: "https://placehold.co/800x600/4CAF50/white?text=PC+Image"
  },
  sp: {
    src: "https://placehold.co/400x300/2196F3/white?text=SP+Image"
  },
  alt: "Lazy loaded image"
};

export const WithObjectFit = Template.bind({});
WithObjectFit.args = {
  pc: {
    src: "https://placehold.co/1200x800/FF9800/white?text=Wide+PC+Image"
  },
  sp: {
    src: "https://placehold.co/600x400/FF5722/white?text=Wide+SP+Image"
  },
  alt: "Lazy loaded image with object-fit",
  objectFit: true
};

export const FastFade = Template.bind({});
FastFade.args = {
  pc: {
    src: "https://placehold.co/800x600/9C27B0/white?text=Fast+Fade"
  },
  sp: {
    src: "https://placehold.co/400x300/673AB7/white?text=Fast+Fade"
  },
  alt: "Fast fade animation",
  duration: 0.3
};

export const SlowFade = Template.bind({});
SlowFade.args = {
  pc: {
    src: "https://placehold.co/800x600/00BCD4/white?text=Slow+Fade"
  },
  sp: {
    src: "https://placehold.co/400x300/009688/white?text=Slow+Fade"
  },
  alt: "Slow fade animation",
  duration: 2,
  aspectRatio: "4 / 3",
  appearance: {
    placeholderBgColor: "#f0f0f0"
  }
};

export const WithoutPlaceholder = Template.bind({});
WithoutPlaceholder.args = {
  pc: {
    src: "https://placehold.co/800x600/E91E63/white?text=No+Placeholder"
  },
  sp: {
    src: "https://placehold.co/400x300/F44336/white?text=No+Placeholder"
  },
  alt: "Without placeholder",
  showPlaceholder: false
};

export const SquareAspectRatio = Template.bind({});
SquareAspectRatio.args = {
  pc: {
    src: "https://placehold.co/800x800/3F51B5/white?text=Square+1:1"
  },
  sp: {
    src: "https://placehold.co/400x400/303F9F/white?text=Square+1:1"
  },
  alt: "Square aspect ratio (1:1)",
  aspectRatio: "1 / 1"
};

export const WideAspectRatio = Template.bind({});
WideAspectRatio.args = {
  pc: {
    src: "https://placehold.co/1920x1080/009688/white?text=Wide+16:9"
  },
  sp: {
    src: "https://placehold.co/960x540/00796B/white?text=Wide+16:9"
  },
  alt: "Wide aspect ratio (16:9)",
  aspectRatio: "16 / 9"
};

export const PortraitAspectRatio = Template.bind({});
PortraitAspectRatio.args = {
  pc: {
    src: "https://placehold.co/600x800/FF5722/white?text=Portrait+3:4"
  },
  sp: {
    src: "https://placehold.co/300x400/E64A19/white?text=Portrait+3:4"
  },
  alt: "Portrait aspect ratio (3:4)",
  aspectRatio: "3 / 4"
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  pc: {
    src: "https://placehold.co/800x600/795548/white?text=Custom+Placeholder"
  },
  sp: {
    src: "https://placehold.co/400x300/5D4037/white?text=Custom+Placeholder"
  },
  alt: "Custom placeholder style",
  appearance: {
    placeholderBgColor: "#FFE082"
  }
};

export const MultipleImages: StoryFn<typeof LazyImage> = () => (
  <div>
    <div style={{ height: "50vh", background: "#f0f0f0", padding: "20px" }}>
      <h2>Scroll down to see multiple lazy-loaded images</h2>
    </div>

    {[1, 2, 3, 4, 5].map((index) => (
      <div key={index} style={{ padding: "20px", marginBottom: "20px" }}>
        <h3>Image {index}</h3>
        <LazyImage
          pc={{
            src: `https://placehold.co/800x600/${
              ["4CAF50", "2196F3", "FF9800", "9C27B0", "00BCD4"][index - 1]
            }/white?text=Image+${index}`
          }}
          sp={{
            src: `https://placehold.co/400x300/${
              ["4CAF50", "2196F3", "FF9800", "9C27B0", "00BCD4"][index - 1]
            }/white?text=Image+${index}`
          }}
          alt={`Lazy loaded image ${index}`}
        />
      </div>
    ))}

    <div style={{ height: "50vh", background: "#e0e0e0" }} />
  </div>
);
