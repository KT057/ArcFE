import '../../../shared/styles/common.css';
import runScript from '!!raw-loader!../../../shared/scripts/common.js';
import { withRunScript } from 'storybook-addon-run-script/html';
import Html from './index.html';

export default {
  title: 'Label',
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

export const Product003 = {
  render: () => {
    return Template(Html);
  },
  parameters: {
    design: [
      {
        type: 'link',
        url: 'https://www.figma.com/design/YUbTzje2jUbb0Yh5ycNx2P/ui-catalog?node-id=2278-439&t=6oaopDgnsJt0Wa4d-4'
      }
    ]
  }
};
