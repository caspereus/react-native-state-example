import {useReducer} from 'react';
import create from 'zustand';
import {reducer, initialState, ZustandState, State} from './';

export const useExampleReducer = () => useReducer(reducer, initialState);

export const useExampleStore = create<ZustandState>(set => ({
  state: initialState,
  increment: () =>
    set(state => {
      const increasedCounter = state.state.counter + 1;
      return {
        state: {
          counter: state.state.counter + 1,
          items: [...state.state.items, increasedCounter],
        },
      };
    }),
  reset: () => set(() => ({state: initialState})),
}));
