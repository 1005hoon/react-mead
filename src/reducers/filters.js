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

export default filtersReducer;
