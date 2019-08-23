import React, { useReducer } from "react";

import Context from "./config";
import __boilerplateReducer, { __boilerplateStore } from "../__boilerplateDuck";
import middleware from "./middleware";

const Store = props => {
  
  const [__boilerplateState, __boilerplateDispatch] = useReducer(__boilerplateReducer, __boilerplateStore);

  const trigglerDispatchs = action => {
    const dispatchs = [__boilerplateDispatch];
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](action);
    }
  };


  const middlewareContrutor = action => {
    middleware(action)(trigglerDispatchs);
  };


  const combinedReducers = {
    store: {
      ...__boilerplateState,
    },
    dispatch: middlewareContrutor
  };

  return (
    <Context.Provider value={combinedReducers}>
      {props.children}
    </Context.Provider>
  );
};

export default Store;
