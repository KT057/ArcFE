import '../../../shared/styles/common.css';
import runScript from '!!raw-loader!../../../shared/scripts/common.js';
import { withRunScript } from 'storybook-addon-run-script/html';
import Html from './index.html';

export default {
  title: 'Loading',
  decorators: [withRunScript(runScript)]
};

const Template = (component) => {
  return `
    <div class="site-wide">
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
        type: 'link',
        url: 'https://www.figma.com/design/YUbTzje2jUbb0Yh5ycNx2P/ui-catalog?node-id=2380-485&t=RGFLTMKlDzmNnPk1-4'
      }
    ]
  }
};
