import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Node.js用のMSWサーバーをセットアップ
export const server = setupServer(...handlers);
