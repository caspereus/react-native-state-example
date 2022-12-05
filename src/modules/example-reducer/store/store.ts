import {useReducer} from 'react';
import create from 'zustand';
import {reducer, initialState, ZustandState, State} from './';

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
          items: [...state.items, increasedCounter],
        },
      };
    }),
  reset: () => set(() => ({state: initialState})),
}));
