import { Map } from "@vis.gl/react-google-maps";
import type { ReactNode } from "react";

type Props = {
  /**
   * mapId の値
   */
  mapId: string;
  /**
   * defaultCenter の値
   */
  defaultCenter?: {
    lat: number;
    lng: number;
  };
  /**
   * defaultZoom の値
   */
  defaultZoom?: number;
  /**
   * disableDefaultUI の設定
   */
  disableDefaultUI?: boolean;
  /**
   * 表示内容
   */
  children: ReactNode;
};

export const GoogleMap = ({
  defaultCenter,
  defaultZoom,
  disableDefaultUI,
  mapId,
  children
}: Props) => {
  return (
    <Map
      defaultCenter={defaultCenter}
      defaultZoom={defaultZoom}
      style={{ width: "100%", height: "100%" }}
      disableDefaultUI={disableDefaultUI}
      mapId={mapId}
      gestureHandling={"greedy"}
    >
      {children}
    </Map>
  );
};
