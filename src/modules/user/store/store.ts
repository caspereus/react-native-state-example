import create from 'zustand';
import {initialState, ZustandState} from './state';

export const useUserStore = create<ZustandState>((set, get) => ({
  state: initialState,
  toogleActiveStatus: () =>
    set(({state}) => ({
      state: {
        ...state,
        isActive: !get().state.isActive,
      },
    })),
  changeName: (name: string) =>
    set(({state}) => ({
      state: {
        ...state,
        name: name,
      },
    })),
}));
