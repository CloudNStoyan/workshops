import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);
  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h2
        className={`${count >= 100 ? "green" : ""}${
          count <= -100 ? "red" : ""
        }`}
        data-testid="counter"
      >
        {count}
      </h2>
      <button
        onClick={() => setCount(count - increment)}
        data-testid="subtract-btn"
      >
        -
      </button>
      <input
        className="text-center"
        type="number"
        data-testid="input"
        value={increment}
        onChange={(e) => setIncrement(+e.target.value)}
      />
      <button onClick={() => setCount(count + increment)} data-testid="add-btn">
        +
      </button>
    </div>
  );
}

export default Counter;
