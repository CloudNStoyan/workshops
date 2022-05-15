import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import CharacterList from './CharacterList';

import dummyData from './dummy-data';
import endpoint from './endpoint';

import './styles.scss';

const initialState = {
  result: null,
  loading: true,
  error: null,
};

const FETCH_REDUCER_TYPES = {
  LOADING: 'LOADING',
  RESPONSE_COMPLETE: 'RESPONSE_COMPLETE',
  ERROR: 'ERROR',
};

const fetchReducer = (state, action) => {
  if (action.type === FETCH_REDUCER_TYPES.LOADING) {
    return {
      result: null,
      loading: true,
      error: null,
    };
  }

  if (action.type === FETCH_REDUCER_TYPES.RESPONSE_COMPLETE) {
    return {
      result: action.payload.response,
      loading: false,
      error: null,
    };
  }

  if (action.type === FETCH_REDUCER_TYPES.ERROR) {
    return {
      result: null,
      loading: false,
      error: action.payload.error,
    };
  }
  return state;
};

const useFetch = (api) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  console.log(state);

  console.log('useFetch rerendered');

  useEffect(() => {
    dispatch({ type: FETCH_REDUCER_TYPES.LOADING });

    fetch(api)
      .then((resp) => resp.json())
      .then((resp) => {
        dispatch({
          type: FETCH_REDUCER_TYPES.RESPONSE_COMPLETE,
          payload: { response: resp },
        });
      })
      .catch((error) => {
        dispatch({ type: FETCH_REDUCER_TYPES.ERROR, paylod: { error } });
      });
  }, []);

  return [state.result, state.loading, state.error];
};

const Application = () => {
  const [response, loading, error] = useFetch(`${endpoint}/characters`);
  const characters = (response && response.characters) || [];

  return (
    <div className="Application">
      <header>
        <h1>Star Wars Characters</h1>
      </header>
      <main>
        <section className="sidebar">
          {loading ? (
            <h1>Loading..</h1>
          ) : (
            <CharacterList characters={characters} />
          )}
          {error && <p className="error">{error.message}</p>}
        </section>
      </main>
    </div>
  );
};

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Application />
  </Router>,
  rootElement,
);
