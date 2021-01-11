store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses, state.filters);
});

store.dispatch(
  addExpense({ description: "Grocery", amount: 340, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: "Online Lecture", amount: 550, createdAt: -1000 })
);

store.dispatch(sortByAmount());
