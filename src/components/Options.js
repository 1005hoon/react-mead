import React from "react";
import Option from "./Option";

const Options = ({ options, removeAll, deleteOption }) => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button className="button button--link" onClick={removeAll}>
          Remove All
        </button>
      </div>

      {options.length === 0 && (
        <p className="widget__message">Please Add an Option to Get Started!</p>
      )}
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
