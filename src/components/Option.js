import React from "react";

const Option = ({ option, index, deleteOption }) => {
  return (
    <div>
      {option}
      <button onClick={() => deleteOption(index)}>Delete</button>
    </div>
  );
};

export default Option;
