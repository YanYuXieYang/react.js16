/*
 * @Author: your name
 * @Date: 2021-03-28 23:36:21
 * @LastEditTime: 2021-03-28 23:43:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react.js16\ch12\counter\src\components\CounterComp.js
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CounterType } from '../actions'
// TODO: define ES6 Class React Component
class CounterComp extends Component {
  // TODO: constructor
  constructor(props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onIncrementAsync = this.onIncrementAsync.bind(this);
    this.onDouble = this.onDouble.bind(this);
  }
  // TODO: handle event
  onIncrement () {
    this.props.vstore.dispatch({ type: CounterType.INCREMENT });
  }
  onDecrement () {
    this.props.vstore.dispatch({ type: CounterType.DECREMENT });
  }
  onDouble () {
    this.props.vstore.dispatch({ type: CounterType.DOUBLE });
  }
  onIncrementAsync () {
    setTimeout(this.onIncrement, 1000);
  }
  // TODO: render
  render () {
    // TODO: props
    const value = this.props.value;
    return (
      <span>
        <h3>基于React + Redux的计数器应用</h3>
        <p>计数器: {value} 次.</p>
        <p>
          {' '}
          <button onClick={this.onIncrement}> +1 </button>
          {' '}
          <button onClick={this.onDecrement}> -1 </button>
          {' '}
          <button onClick={this.onDouble}> Double </button>
          {' '}
          <button onClick={this.onIncrementAsync}> Increment Async </button>
        </p>
      </span>
    );
  }
}
// TODO: Props Type
CounterComp.propTypes = {
  value: PropTypes.number.isRequired,
  store: PropTypes.object
}
// TODO: export component
export default CounterComp;
