import React, { useState } from 'react';
import { fetchDogFacts, DogFactType } from './dog-facts';

const Form = ({
  setDogFacts
}: {
  setDogFacts: React.Dispatch<React.SetStateAction<DogFactType[]>>;
}) => {
  const [dogFactsNumber, setDogFactsNumber] = useState(3);

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();

        setDogFacts(await fetchDogFacts(dogFactsNumber));
      }}
    >
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        <input
          type="number"
          value={dogFactsNumber}
          onChange={(e) => setDogFactsNumber(+e.target.value)}
          min="1"
          max="10"
          id="number-of-facts"
        />
      </div>
      <input type="submit" value="Fetch Dog Facts" />
    </form>
  );
};

const Fact = ({ fact }: { fact: string }) => {
  return (
    <article className="dog-fact">
      <h3>Dog Fact</h3>
      <p>{fact}</p>
    </article>
  );
};

const Application = () => {
  const [dogFacts, setDogFacts] = useState([] as DogFactType[]);

  return (
    <main>
      <Form setDogFacts={setDogFacts} />
      <section>
        {dogFacts &&
          dogFacts.map((fact) => <Fact fact={fact.fact} key={fact.id} />)}
      </section>
    </main>
  );
};

export default Application;
