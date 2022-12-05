type INCREMENT_COUNTER = {
  _tag: 'INCREMENT_COUNTER';
  payload?: {};
};

type RESET = {
  _tag: 'RESET';
  payload?: {};
};

type Action = INCREMENT_COUNTER | RESET;

export type {Action};
