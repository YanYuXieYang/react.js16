import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducerTodosApp from "./reducers";
import { Provider } from 'react-redux';
import App from './components/App';

// create store
const store = createStore(reducerTodosApp);
// render
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);