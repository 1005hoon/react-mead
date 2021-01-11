import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuidv4(),
      description,
      note,
      amount,
      createdAt,
    },
  };
};

// REMOVE_EXPENSE
const removeExpense = ({ id }) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

// EDIT_EXPENSE
const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };
};

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

// SET_TEXT_FILTER
const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    text,
  };
};

// SORT_BY_DATE
const sortByDate = () => {
  return {
    type: "SET_DATE_FILTER",
  };
};
// SORT_BY_AMOUNT
const sortByAmount = () => {
  return {
    type: "SET_AMOUNT_FILTER",
  };
};

// SET_START_DATE
const setStartDate = (date) => {
  return {
    type: "SET_START_DATE",
    date,
  };
};
// SET_END_DATE
const setEndDate = (date) => {
  return {
    type: "SET_END_DATE",
    date,
  };
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SET_DATE_FILTER":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_AMOUNT_FILTER":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.date,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.date,
      };

    default:
      return state;
  }
};

// Get Visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;

      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

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
