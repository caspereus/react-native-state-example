import {useReducer} from 'react';
import create from 'zustand';
import {reducer, initialState, ZustandState} from './';

export const useExampleReducer = () => useReducer(reducer, initialState);

export const useExampleStore = create<ZustandState>((set, get) => ({
  state: initialState,
  increment: () =>
    set(({state}) => {
      const increasedCounter = state.counter + 1;
      return {
        state: {
          ...state,
          counter: state.counter + 1,
          historyItems: [...state.historyItems, increasedCounter],
        },
      };
    }),
  reset: () => set(() => ({state: initialState})),
}));
