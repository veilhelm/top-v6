import { createStore } from 'redux';

const INCREASE_COUNT = 'INCREASE_COUNT';
const DECREASE_COUNT = 'DECREASE_COUNT';

export function increaseCount(increaseBy) {
  return {
    type: INCREASE_COUNT,
    payload: increaseBy
  }
}

function reducer(state, action) {
  switch(action.type) {
    case INCREASE_COUNT:
      console.log('increasing count....')
      return {
        count: state.count + action.payload,
      };
    case DECREASE_COUNT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const initialState = {
  count: 0,
};

export const store = createStore(reducer, initialState);
