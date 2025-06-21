import "../../../common/styles/common.css";
import runScript from "!!raw-loader!../../../common/scripts/common.js";
import { withRunScript } from "storybook-addon-run-script/html";
import Html from "./index.html";

export default {
  title: "Balloon",
  decorators: [withRunScript(runScript)]
};

const Template = (component) => {
  return `
    <div class="site-wide" style="padding: 100px; display: flex; justify-content: center; align-items: center; gap: 50px;">
      ${component}
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
        url: "https://www.figma.com/design/YUbTzje2jUbb0Yh5ycNx2P/ui-catalog?node-id=2380-403&t=XelstliegjgV8J7Y-4"
      }
    ]
  }
};
