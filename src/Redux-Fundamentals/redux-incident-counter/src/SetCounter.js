import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set } from './actions';

export const SetCounter = () => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const actions = bindActionCreators({ set }, dispatch);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          actions.set(count);
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
