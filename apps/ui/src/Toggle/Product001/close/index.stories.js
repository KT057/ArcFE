import './style/index.css';
import runScript from '!!raw-loader!./script/index.js';
import { withRunScript } from 'storybook-addon-run-script/html';
import image from './images/image.png';
import Html from './index.html';

export default {
  title: 'Toggle/Product001',
  render: () => {
    return Html;
  },
  decorators: [withRunScript(runScript)]
};

export const Close = {
  parameters: {
    design: [
      {
        type: 'image',
        url: image,
        scale: 0.5
      },
      {
        type: 'link',
        url: 'https://www.figma.com/design/YUbTzje2jUbb0Yh5ycNx2P/ui-catalog?node-id=2034-10&t=LmM30CRzDWShsWXt-4'
      }
    ]
  }
};
