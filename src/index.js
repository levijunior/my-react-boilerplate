import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Provider from './store/config/provider'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  body {
    padding: 0;
    margin: 0;
    background: #222;
    font-family: 'Raleway', sans-serif;
  }
`

ReactDOM.render(
  <Provider>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
