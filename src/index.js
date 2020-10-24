/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './app';
import MainTheme from './themes';

ReactDOM.render(
  <ThemeProvider theme={MainTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('main')
);
