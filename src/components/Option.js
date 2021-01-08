import React from "react";

const Option = ({ option, index, deleteOption }) => {
  return (
    <div className="option">
      <p className="option__text">
        {index + 1}. {option}
      </p>
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
