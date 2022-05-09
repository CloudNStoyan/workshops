import React, { useReducer } from 'react';

import id from 'uuid/v4';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

import initialState from './initialState';

const GRUDGE_ACTIONS = {
  GRUDGE_ADD: 'GRUDGE_ADD',
  GRUDGE_FORGIVE: 'GRUDGE_FORGIVE'
};

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === GRUDGE_ACTIONS.GRUDGE_ADD) {
    return [action.payload, ...state];
  }

  if (action.type === GRUDGE_ACTIONS.GRUDGE_FORGIVE) {
    const grudge = state.find((grudge) => grudge.id === action.payload.id);

    grudge.forgiven = !grudge.forgiven;

    return [...state];
  }

  return state;
};

const Application = () => {
  const [grudges, dispatch] = useReducer(reducer, initialState);
  console.log(grudges);

  const addGrudge = ({ person, reason }) => {
    dispatch({
      type: GRUDGE_ACTIONS.GRUDGE_ADD,
      payload: {
        person,
        reason,
        forgiven: false,
        id: id()
      }
    });
  };

  const toggleForgiveness = (id) => {
    dispatch({
      type: GRUDGE_ACTIONS.GRUDGE_FORGIVE,
      payload: {
        id
      }
    });
  };

  return (
    <div className="Application">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
};

export default Application;
