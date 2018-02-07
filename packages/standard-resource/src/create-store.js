// From a Gist by developit:
//
// https://gist.github.com/developit/55c48d294abab13a146eac236bae3219
//

import emptyStore from "./utils/empty-store";

export default function createStore(initialState = emptyStore) {
  let listeners = [];

  return {
    setState(update) {
      state = { ...state, ...update };
      listeners.forEach(f => f(state));
    },

    subscribe(f) {
      listeners.push(f);
    },

    unsubscribe(f) {
      let i = listeners.indexOf(f);
      listeners.splice(i, !!~i);
    },

    getState() {
      return state;
    }
  };
}
