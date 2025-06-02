import '../../../../shared/styles/common.css';
import runScript from '!!raw-loader!./script/index.js';
import { withRunScript } from 'storybook-addon-run-script/html';
import Html from './index.html';

export default {
  title: 'Toggle/Product001',
  render: () => {
    return `
      <div class="site-wide">
        <div class="site-wide__w300">
          ${Html}
        </div>
      </div>
    `;
  },
  decorators: [withRunScript(runScript)]
};

export const Open = {
  parameters: {
    design: [
      {
        type: 'link',
        url: 'https://www.figma.com/design/YUbTzje2jUbb0Yh5ycNx2P/ui-catalog?node-id=2034-10&t=LmM30CRzDWShsWXt-4'
      }
    ]
  }
};
