import { apiTestHandlers } from "./api-test";
import { axiosHandlers } from "./axios";

export const handlers = [...axiosHandlers, ...apiTestHandlers];
