import { createContext, useEffect, useState } from "react";
import { SP_SIZE, TABLET_SIZE } from "../styles";

type MediaContextType = "sp" | "tablet" | "pc";

export const MediaContext = createContext<MediaContextType>("pc");

export const MediaProvider = ({ children }: { children: React.ReactNode }) => {
  const [media, setMedia] = useState<MediaContextType>("pc");

  const handleCheckWindowSize = () => {
    if (window.innerWidth > SP_SIZE && window.innerWidth <= TABLET_SIZE) {
      setMedia("tablet");
    } else if (window.innerWidth <= SP_SIZE) {
      setMedia("sp");
    } else {
      setMedia("pc");
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    handleCheckWindowSize();
    window.addEventListener("resize", handleCheckWindowSize);

    return () => {
      window.removeEventListener("resize", handleCheckWindowSize);
    };
  }, []);

  return (
    <MediaContext.Provider value={media}>{children}</MediaContext.Provider>
  );
};
