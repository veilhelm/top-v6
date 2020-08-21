import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postsReducer } from './postsReducer';

function logger(store) {
  return function (next) {
    return function (action) {
      console.log('dispatching action: ', action);
      console.log('Prev state: ', store.getState());

      const result = next(action);

      console.log('New state: ', store.getState());

      return result;
    }
  }
}

const rootReducer = combineReducers({ postsReducer});
const middlewares = applyMiddleware(logger, thunk);

export const store = createStore(rootReducer, middlewares);
