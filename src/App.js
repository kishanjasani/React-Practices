import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

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
