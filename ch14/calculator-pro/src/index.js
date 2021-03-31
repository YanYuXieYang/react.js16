import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { App } from './containers/App'
import reducerCalculator from './reducers/reducerCalculator';

// TODO: Create Store
const store = createStore(reducerCalculator);
const rootEle = document.getElementById('root');
// TODO: render
const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEle
);
// TODO: call render
render();
// TODO: subscribe
store.subscribe(render);
