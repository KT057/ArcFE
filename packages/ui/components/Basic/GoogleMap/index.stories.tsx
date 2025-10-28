import type { Meta, StoryFn } from "@storybook/react";
import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { GoogleMap } from "./index";

export default {
  title: "Basic/GoogleMap",
  component: GoogleMap,
  tags: ["autodocs"],
  parameters: {
    screenshot: {
      skip: true
    }
  }
} as Meta<typeof GoogleMap>;

const Template: StoryFn<typeof GoogleMap> = (args) => (
  <div style={{ width: "100vw", height: "100vh" }}>
    <GoogleMap {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  disableDefaultUI: true,
  defaultCenter: {
    lat: 35.681236,
    lng: 139.767125
  },
  defaultZoom: 15,
  mapId: process.env.GOOGLE_MAP_ID ?? "",
  children: (
    <AdvancedMarker
      position={{ lat: 35.681236, lng: 139.767125 }}
      content="Hello, world!"
    />
  )
};
