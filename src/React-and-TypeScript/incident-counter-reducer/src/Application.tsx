import { useReducer } from 'react';

type IncidentState = {
  value: number;
};

type IncidentAction = {
  type: 'INCREMENT' | 'DECREMENT' | 'RESET';
  payload?: never;
};

const reducer = (state: IncidentState, action: IncidentAction) => {
  console.log(state, action);
  if (action.type === 'INCREMENT') {
    return { value: state.value + 1 };
  }

  if (action.type === 'DECREMENT') {
    return { value: state.value - 1 };
  }

  if (action.type === 'RESET') {
    return { value: 0 };
  }

  return state;
};

const initialValue: IncidentState = {
  value: 0
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{state.value}</p>
      <section className="controls">
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>
          Decrement
        </button>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
