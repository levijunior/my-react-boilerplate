import { createContext } from "react";
import { __boilerplateStore } from "../__boilerplateDuck";

export const initialState = {
  store: {
    ...__boilerplateStore,
  },
  dispatch: () => {}
};

const Context = createContext(initialState);

export default Context;
