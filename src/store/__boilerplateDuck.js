// SINGLE STORE INITIAL STATE
export const __boilerplateStore = {
  __boilerplate: 'Editar aqui'
};

// TYPES
export const __BOILERPLATE = "__BOILERPLATE";

//REDUCERS
const __boilerplateReducer = (state = __boilerplateStore, action) => {
  switch (action.type) {
    case __BOILERPLATE:
      return {
        __boilerplate: action.__boilerplate || 'Editar aqui'
      };

    default:
      return state;
  }
};

//ACTIONS
export const __boilerplateAction = __boilerplate => {
  return {
    type: __BOILERPLATE,
    __boilerplate
  };
};

export default __boilerplateReducer;
