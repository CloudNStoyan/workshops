import React, { useReducer, createContext, useCallback } from 'react';
import initialState from './initialState';
import id from 'uuid/v4';

export const GrudgeContext = createContext();

const GRUDGE_ACTIONS = {
  GRUDGE_ADD: 'GRUDGE_ADD',
  GRUDGE_FORGIVE: 'GRUDGE_FORGIVE'
};

const reducer = (state = [], action) => {
  if (action.type === GRUDGE_ACTIONS.GRUDGE_ADD) {
    return [
      {
        id: id(),
        ...action.payload
      },
      ...state
    ];
  }

  if (action.type === GRUDGE_ACTIONS.GRUDGE_FORGIVE) {
    return state.map((grudge) => {
      if (grudge.id === action.payload.id) {
        return { ...grudge, forgiven: !grudge.forgiven };
      }
      return grudge;
    });
  }

  return state;
};

export const GrudgeProvider = ({ children }) => {
  const [grudges, dispatch] = useReducer(reducer, initialState);

  const addGrudge = useCallback(
    ({ person, reason }) => {
      dispatch({
        type: GRUDGE_ACTIONS.GRUDGE_ADD,
        payload: {
          person,
          reason
        }
      });
    },
    [dispatch]
  );

  const toggleForgiveness = useCallback(
    (id) => {
      dispatch({
        type: GRUDGE_ACTIONS.GRUDGE_FORGIVE,
        payload: {
          id
        }
      });
    },
    [dispatch]
  );

  return (
    <GrudgeContext.Provider value={{ grudges, addGrudge, toggleForgiveness }}>
      {children}
    </GrudgeContext.Provider>
  );
};
