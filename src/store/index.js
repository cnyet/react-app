/**
 * store 是唯一的
 * store 里的数据只有store自己能更新
 * createStore 创建store
 * store.dispatch 出发action改变store
 * store.getState 接受store里的数据
 * store.subscribe 订阅store数据的变化，回调函数执行
 * redux-thunk 是redux的中间件，是连接action和store的中间件，执行redux异步操作
 * redux-thunk 的作用是对对dispatch方法的升级，没有thunk时dispatch只能接受一个对象，有thunk以后dispatch接受一个函数
 * redux-saga 对于大型项目时可拆分复杂的业务逻辑
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer.js';
import mySaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export default store;

