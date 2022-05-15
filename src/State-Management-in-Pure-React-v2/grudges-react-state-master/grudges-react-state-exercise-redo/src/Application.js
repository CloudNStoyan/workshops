import React, { useContext } from 'react';
import { GrudgeContext } from './GrudgeContext';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

const Application = () => {
  const { undo, isPast, redo, isFuture } = useContext(GrudgeContext);
  console.log({ undo, isPast, redo, isFuture });
  return (
    <div className="Application">
      <NewGrudge />
      <section>
        <button disabled={!isPast} onClick={undo}>
          Undo
        </button>
        <button disabled={!isFuture} onClick={redo}>
          Redo
        </button>
      </section>
      <Grudges />
    </div>
  );
};

export default Application;
