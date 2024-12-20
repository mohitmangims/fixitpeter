"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div>
      <h1 data-testid="count-value">Count: {count}</h1>
      <div className="stack">
        <button
          className="stack-item"
          data-testid="increment-btn"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="stack-item"
          data-testid="decrement-btn"
          onClick={decrement}
        >
          Decrement
        </button>
        <button className="stack-item" data-testid="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
