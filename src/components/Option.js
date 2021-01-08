import React from "react";

const Option = ({ option, index, deleteOption }) => {
  return (
    <div>
      {option}
      <button
        className="button button--link"
        onClick={() => deleteOption(index)}
      >
        Delete
      </button>
    </div>
  );
};

export default Option;
