import { accordionProduct001 } from "../components/Accordion/Product001/script";
import { accordionProduct002 } from "../components/Accordion/Product002/script";
import { accordionProduct003 } from "../components/Accordion/Product003/script";
import { accordionProduct004 } from "../components/Accordion/Product004/script";
import { buttonProduct002 } from "../components/Button/Product002/script";
import { toggleProduct002 } from "../components/Toggle/Product002/script";

export const componentScripts = () => {
  toggleProduct002();
  buttonProduct002();
  accordionProduct001();
  accordionProduct002();
  accordionProduct003();
  accordionProduct004();
};
