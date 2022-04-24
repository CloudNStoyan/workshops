const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Ricky",
      animal: "Dog",
      breed: "English Cocker Spaniel",
    }),
    React.createElement(Pet, {
      name: "Pai",
      animal: "Dog",
      breed: "English Cocker Spaniel",
    }),
    React.createElement(Pet, {
      name: "Kozunak",
      animal: "Cat",
      breed: "Yellow Common",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
