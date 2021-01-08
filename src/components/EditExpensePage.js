import React from "react";

const EditExpensePage = ({ match }) => {
  console.log(match);
  return <div>Edit expense with id of {match.params.id}</div>;
};

export default EditExpensePage;
