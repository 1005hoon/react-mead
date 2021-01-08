import React from "react";

const Action = ({ pickRandom, hasOptions }) => {
  return (
    <div>
      <button onClick={pickRandom} disabled={!hasOptions}>
        What should i do?
      </button>
    </div>
  );
};

export default Action;