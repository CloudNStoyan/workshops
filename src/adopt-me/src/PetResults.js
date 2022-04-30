import Pet from "./Pet";

export default function PetResults(props) {
  return (
    <>
      {props.pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
          images={pet.images}
          location={`${pet.city}, ${pet.state}`}
          id={pet.id}
        />
      ))}
    </>
  );
}
