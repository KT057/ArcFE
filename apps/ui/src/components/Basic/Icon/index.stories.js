import "../../../common/styles/common.css";
import runScript from "!!raw-loader!../../../common/scripts/common.js";
import { withRunScript } from "storybook-addon-run-script/html";
import Html from "./index.html";

export default {
  title: "Basic/Icon",
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
  },
  parameters: {
    design: [
      {
        type: "link",
        url: "https://www.figma.com/design/YUbTzje2jUbb0Yh5ycNx2P/ui-catalog?node-id=2171-3&t=1vceUJz8UfWSxwKe-4"
      }
    ]
  }
};
