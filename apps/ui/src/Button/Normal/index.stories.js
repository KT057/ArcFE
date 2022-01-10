import './style/index.css';
import runScript from '!!raw-loader!./script/index.js';
import { withRunScript } from 'storybook-addon-run-script/html';
import image from './images/image.png';
import Html from './index.html';

export default {
  title: 'Button',
  render: () => {
    return Html;
  },
  decorators: [withRunScript(runScript)]
};

export const Normal = {
  parameters: {
    design: [
      {
        type: 'image',
        url: image,
        scale: 0.5
      },
      {
        type: 'link',
        url: 'https://www.figma.com/design/R5hHBrcHw8igUeJYOKzrPn/omatomekun?node-id=44-212&t=pCCcFP5DRf26Vvuo-4'
      }
    ]
  }
};
