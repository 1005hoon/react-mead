// SET_TEXT_FILTER
export const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    text,
  };
};

// SORT_BY_DATE
export const sortByDate = () => {
  return {
    type: "SET_DATE_FILTER",
  };
};
// SORT_BY_AMOUNT
export const sortByAmount = () => {
  return {
    type: "SET_AMOUNT_FILTER",
  };
};

// SET_START_DATE
export const setStartDate = (date) => {
  return {
    type: "SET_START_DATE",
    date,
  };
};
// SET_END_DATE
export const setEndDate = (date) => {
  return {
    type: "SET_END_DATE",
    date,
  };
};
