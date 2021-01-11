import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
  return visibleExpenses;
});

store.dispatch(
  addExpense({
    description: "Water Bill",
    amount: 72,
  })
);

store.dispatch(
  addExpense({
    description: "Rental",
    amount: 970,
  })
);

store.dispatch(
  addExpense({
    description: "Gas Bill",
    amount: 24,
  })
);

store.dispatch(
  addExpense({
    description: "Online Course Purchase",
    amount: 110,
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector("#root"));
