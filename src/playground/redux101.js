import { createStore } from "redux";

// Store -> storing all states
// createStore((defaultState, action) => {})
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
});

console.log(store.getState());

// Actions  -> object that gets sent to the store
// increment, decrement, reset

// increment the count
store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "INCREMENT",
});

console.log(store.getState());

// decrement the count
store.dispatch({
  type: "DECREMENT",
});

console.log(store.getState());

// reset the count
store.dispatch({
  type: "RESET",
});

console.log(store.getState());
