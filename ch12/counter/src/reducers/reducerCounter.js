/*
 * @Author: your name
 * @Date: 2021-03-28 23:44:04
 * @LastEditTime: 2021-03-28 23:44:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react.js16\ch12\counter\src\reducers\reducerCounter.js
 */
import { CounterType } from '../actions'
// TODO: reducer
var reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case CounterType.INCREMENT:
      return state + 1;
    case CounterType.DECREMENT:
      return state - 1;
    case CounterType.DOUBLE:
      return state * 2;
    default:
      return state;
  }
};
// TODO: export Reducer
export default reducerCounter;
