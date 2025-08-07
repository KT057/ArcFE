import "../../../../common/styles/common.css";
import runScript from "!!raw-loader!../../../../common/scripts/common.js";
import { withRunScript } from "storybook-addon-run-script/html";
import Html from "./index.html";

export default {
  title: "Advanced/Common/FadeInAndZoomImages",
  decorators: [withRunScript(runScript)]
};

const Template = (component) => {
  return `
    <div class="site-wide">
      ${component}
    </div>
  `;
};

export const Default = {
  render: () => {
    return Template(Html);
  }
};
