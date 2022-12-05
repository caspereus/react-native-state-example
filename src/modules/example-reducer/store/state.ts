type State = {
  counter: number;
  items: number[];
};

const initialState: State = {
  counter: 0,
  items: [0],
};

type ZustandState = {
  state: State;
  increment: () => void;
  reset: () => void;
};

export type {State, ZustandState};
export {initialState};
