type State = {
  counter: number;
  historyItems: number[];
};

const initialState: State = {
  counter: 0,
  historyItems: [0],
};

type ZustandState = {
  state: State;
  increment: () => void;
  reset: () => void;
};

export type {State, ZustandState};
export {initialState};
