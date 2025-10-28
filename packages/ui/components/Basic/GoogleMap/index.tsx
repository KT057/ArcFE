import { Map } from "@vis.gl/react-google-maps";
import type { ReactNode } from "react";

type Props = {
  mapId: string;
  defaultCenter?: {
    lat: number;
    lng: number;
  };
  defaultZoom?: number;
  disableDefaultUI?: boolean;
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
