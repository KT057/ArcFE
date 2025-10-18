import { useContext } from "react";
import { MediaContext } from "../../../context";

export type Type = "001";

interface MediaProps {
  pc: React.ReactNode;
  tablet?: React.ReactNode;
  sp: React.ReactNode;
}

export const Media = ({
  pc: pcNode,
  tablet: tabletNode,
  sp: spNode
}: MediaProps) => {
  const media = useContext(MediaContext);

  if (media === "tablet") {
    return tabletNode ? tabletNode : pcNode;
  }

  if (media === "sp") {
    return spNode;
  }

  return pcNode;
};
