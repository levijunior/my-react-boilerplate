// SINGLE STORE INITIAL STATE
export const __boilerplateStore = {
  data: '__BOILERPLATE',
};

// TYPES
export const __BOILERPLATE = "__BOILERPLATE";

//REDUCERS
const __boilerplateReducer = (state = __boilerplateStore, action) => {
  switch (action.type) {
    case __BOILERPLATE:
      return {
        data: action.data || '__BOILERPLATE'
      };

    default:
      return state;
  }
};

//ACTIONS
export const __boilerplateAction = data => {
  return {
    type: __BOILERPLATE,
    data
  };
};

export default __boilerplateReducer;
