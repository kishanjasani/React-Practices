import React from "react";
import { render } from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

// throw new Error('lol');
const App = () => {
  return React.createElement("div", { id: "somthing-important" }, [
    React.createElement("h1", {}, "React Learning"),
    React.createElement(Pet, {
      name: "Lalu",
      animal: "Pintu",
      breed: "Havanes"
    }),

    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cocktiel"
    }),

    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mixed"
    })
  ]);
};
render(React.createElement(App), document.getElementById("root"));
