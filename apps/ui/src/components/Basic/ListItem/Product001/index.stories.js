import "../../../../common/styles/common.css";
import runScript from "!!raw-loader!../../../../common/scripts/common.js";
import { withRunScript } from "storybook-addon-run-script/html";
import Html from "./index.html";

export default {
  title: "Basic/ListItem",
  decorators: [withRunScript(runScript)]
};

const Template = (component) => {
  return `
    <div class="site-wide">
      <div class="site-wide__w300">
        ${component}
      </div>
    </div>
  `;
};

export const Product001 = {
  render: () => {
    return Template(Html);
  },
  parameters: {
    design: [
      {
        type: "link",
        url: "https://www.figma.com/design/YUbTzje2jUbb0Yh5ycNx2P/ui-catalog?node-id=2239-160&t=U8GDRDRutplhNbDU-4"
      }
    ]
  }
};
