import React, { useState, useEffect } from 'react';

const COUNTER_STATE_KEY = '__counterState__';

function setTitle(count) {
  document.title = `Count: ${count}`;
}

const useLocalStorage = (initialState, localStorageKey, converter) => {
  const get = () => {
    const storage = localStorage.getItem(localStorageKey);

    if (!storage) {
      return initialState;
    }

    if (converter) {
      return converter(storage);
    }

    return storage;
  };
  const [value, setValue] = useState(get);

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value, localStorageKey]);

  return [value, setValue];
};

const Counter = ({ max, step }) => {
  const [count, setCount] = useLocalStorage(0, COUNTER_STATE_KEY, (x) =>
    Number(x),
  );

  useEffect(() => {
    setTitle(count);
  }, [count]);

  const handleIncrement = () => {
    if (count >= max) {
      return;
    }

    setCount(count + step);
  };

  const handleDecrement = () => {
    setCount(count - step);
  };
  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </section>
    </div>
  );
};
export default Counter;
