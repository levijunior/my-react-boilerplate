import React, { useState, useEffect, useRef } from 'react';

import Connect from "../store/config/connect";
import { __boilerplateAction } from "../store/__boilerplateDuck"; 

const App = props => {

  const inputEl = useRef(null);

  const [__boilerplate, setBoilerplate] = useState("");
  const changeNameHandler = ({ target: { value } }) => setBoilerplate(value);
  const onSubmitHandler = () => props.dispatch(__boilerplateAction(__boilerplate));

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <>
      <div>
        <input
          value={__boilerplate}
          onChange={changeNameHandler}
          type="text"
          placeholder="__boilerplate"
          ref={inputEl} 
          data-testid="inputEl"
        />
        <button
          onClick={onSubmitHandler}
          data-testid="buttonEl"
        >
          change store state
        </button>
      </div>
      <h1 data-testid="h1El">{__boilerplate}</h1>
    </>
  );
};
const mapStateToProps = ({ data }) => {
  return {
    __boilerplate: data
  };
};

export default Connect(mapStateToProps)(App);

