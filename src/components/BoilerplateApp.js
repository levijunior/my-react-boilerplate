import React, { useState, useEffect, useRef } from 'react';

import { FormContainer, InputEl, ButtonEl } from './styled-components/form'
import { H1El, H2El } from './styled-components/text'

import Connect from "../store/config/connect";
import { __boilerplateAction } from "../store/__boilerplateDuck"; 


const App = props => {

  const inputEl = useRef(null);

  const [__boilerplate, setBoilerplate] = useState("");
  const changeNameHandler = ({ target: { value } }) => setBoilerplate(value);
  const onSubmitHandler = e => {
    e.preventDefault()
    props.dispatch(__boilerplateAction(__boilerplate))
  };

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <>
      <H1El>{props.__boilerplate}</H1El>
      <FormContainer onSubmit={onSubmitHandler}>
        <InputEl
          value={__boilerplate}
          onChange={changeNameHandler}
          type="text"
          placeholder="__boilerplate"
          ref={inputEl} 
          data-testid="inputEl"
        />
        <ButtonEl
          data-testid="buttonEl"
        >
          change store state
        </ButtonEl>
      </FormContainer>
      <H2El data-testid="h2El">{__boilerplate}</H2El>
    </>
  );
};

const mapStateToProps = ({ data }) => {
  return {
    __boilerplate: data
  };
};

export default Connect(mapStateToProps)(App);

