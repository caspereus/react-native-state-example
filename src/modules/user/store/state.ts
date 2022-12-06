type State = {
  name: string;
  isActive: boolean;
};

const initialState: State = {
  name: 'Aldy',
  isActive: false,
};

type ZustandState = {
  state: State;
  toogleActiveStatus: () => void;
  changeName: (name: string) => void;
};

export type {State, ZustandState};
export {initialState};
