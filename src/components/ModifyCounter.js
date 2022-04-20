import React from "react";

export default function ModifyCounter({ counter, updateCounter }) {
  const incrementCounter = () => {
    updateCounter(counter + 1);
  };

  const decrementCounter = () => {
    updateCounter(counter - 1);
  };

  const modifyCounter = (event) => {
    updateCounter(parseInt(event.target.value));
  };

  return (
    <div className="counter-modifier">
      <button onClick={decrementCounter} className="btn dec-btn">
        -
      </button>
      <input
        className="counter-input"
        text="text"
        onChange={modifyCounter}
        value={counter}
      />
      <button onClick={incrementCounter} className="btn inc-btn">
        +
      </button>
    </div>
  );
}
