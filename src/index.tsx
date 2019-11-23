import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import { Provider } from 'react-redux';
import { appReducer } from './App/appReducer';
import { endpointMiddleware } from './App/middlewares/endpointMiddleware';
import { ThemeProvider } from 'styled-components';
import App from './App/App';
import theme from './theme';
import './index.css';

const middlewares = [endpointMiddleware, apiMiddleware];

export const store = createStore(
  appReducer,
  compose(
    applyMiddleware(...middlewares),
    devToolsEnhancer({ name: 'App' })
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
