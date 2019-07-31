import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

// throw new Error('lol');
const App = () => {
  // return React.createElement("div", { id: "somthing-important" }, [
  //   React.createElement("h1", {}, "React Learning"),
  //   React.createElement(Pet, {
  //     name: "Lalu",
  //     animal: "Pintu",
  //     breed: "Havanes"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cocktiel"
  //   }),
  //   React.createElement(Pet, {
  //     name: "Doink",
  //     animal: "Cat",
  //     breed: "Mixed"
  //   })
  // ]);
  return (
    <div>
      <h1 id="somthing-important">React Learning</h1>
      <Pet name="Lalu" animal="Pintu" breed="Havanes" />
      <Pet name="Pepper" animal="Bird" breed="Cocktails" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
// render(React.createElement(App), document.getElementById("root"));
