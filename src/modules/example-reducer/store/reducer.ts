import {Action} from './action';
import {initialState, State} from './state';

const reducer = (state: State, {_tag, payload}: Action): State => {
  switch (_tag) {
    case 'INCREMENT_COUNTER':
      const increasedCounter = state.counter + 1;
      return {
        ...state,
        counter: increasedCounter,
        historyItems: [...state.historyItems, increasedCounter],
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};
export {reducer};
