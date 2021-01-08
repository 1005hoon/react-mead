import React from "react";
import Option from "./Option";

const Options = ({ options, removeAll, deleteOption }) => {
  return (
    <div>
      <button className="button button--link" onClick={removeAll}>
        Remove All
      </button>
      {options.length === 0 && <p>Please Add an Option to Get Started!</p>}
      {options.map((option, index) => (
        <Option
          index={index}
          deleteOption={deleteOption}
          key={option}
          option={option}
        />
      ))}
    </div>
  );
};

export default Options;
