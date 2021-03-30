import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import CounterComp from './components/CounterComp'
import reducerCounter from './reducers/reducerCounter'
// Create Store
const store = createStore(reducerCounter);
// Get Element
const rootEle = document.getElementById('root');
// render
const render = () => ReactDOM.render(
  <CounterComp
    value={store.getState()}
    vstore={store}
  />,
  rootEle
);
// call render
render();
// subscribe
store.subscribe(render);