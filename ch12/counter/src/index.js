/*
 * @Author: your name
 * @Date: 2021-03-28 18:46:41
 * @LastEditTime: 2021-03-28 23:37:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react.js16\ch12\counter\src\index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import CounterComp from './components/CounterComp'
import reducerCounter from './reducers/reducerCounter'
// Create Store
const store = createStore(reducerCounter);
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