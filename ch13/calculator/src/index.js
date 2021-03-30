import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import CalculatorComp from './components/CalculatorComp'
import reducerCalculator from './reducers/reducerCalculator'
// create store
const store = createStore(reducerCalculator)
// get Element
const rootEle = document.getElementById('root')
// render
const render = () => ReactDOM.render(
  <CalculatorComp
    s={store.getState()}
    vstore={store}
  />,
  rootEle
)
// call render
render();
// subscribe
store.subscribe(render)