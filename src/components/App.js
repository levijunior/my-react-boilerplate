import React, { useState } from 'react';

import Connect from "../store/config/connect";
import { __boilerplateAction } from "../store/__boilerplateDuck"; 

const App = props => {

  const [__boilerplate, setBoilerplate] = useState("");
  const changeNameHandler = ({ target: { value } }) => setBoilerplate(value);
  const onSubmitHandler = () => props.dispatch(__boilerplateAction(__boilerplate));

  return (
    <div>
      {console.log(props)}
      <h1>{props.__boilerplate}</h1>
      <>
        <input
          value={__boilerplate}
          onChange={changeNameHandler}
          type="text"
          placeholder="__boilerplate"
        />
        <button
          onClick={onSubmitHandler}
        >
          change store state
        </button>
      </>
    </div>
  );
};
const mapStateToProps = ({ __boilerplate }) => {
  return {
    __boilerplate
  };
};

export default Connect(mapStateToProps)(App);

