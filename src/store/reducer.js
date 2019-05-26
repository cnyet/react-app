/**
 * reducer 必须事纯函数
 * 给定固定的输入，就有固定的输出，不会有副作用
 * 不能有时间的操作，不能异步操作，不能有ajax操作，不能改变输入的参数
 */
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, GET_INIT_LIST, INIT_LIST_ACTION } from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
};
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.value;
    return newState;
  }
   if (action.type === GET_INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.value;
    return newState;
  }
  return state;
};
