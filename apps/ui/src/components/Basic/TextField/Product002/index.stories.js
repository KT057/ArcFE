import "../../../../common/styles/common.css";
import runScript from "!!raw-loader!../../../../common/scripts/common.js";
import { withRunScript } from "storybook-addon-run-script/html";
import Html from "./index.html";

export default {
  title: "Basic/TextField",
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

export const Product002 = {
  render: () => {
    return Template(Html);
  },
  parameters: {
    design: [
      {
        type: "link",
        url: "https://www.figma.com/design/YUbTzje2jUbb0Yh5ycNx2P/ui-catalog?node-id=2294-418&t=CG3Uz8S42iBVKtUK-4"
      }
    ]
  }
};
