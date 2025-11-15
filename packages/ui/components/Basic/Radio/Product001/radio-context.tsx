import type { RadioGroupState } from "@react-stately/radio";
import { createContext } from "react";

export const RadioContext = createContext<RadioGroupState>(
  {} as RadioGroupState
);
