import { __BOILERPLATE } from "../__boilerplateDuck";

const middleware = action => next => {

  if (action.type === __BOILERPLATE) {
    console.log(`MIDDLEWARE FOR TYPE: ${action.type}`);
  }

  next(action);
};

export default middleware;
