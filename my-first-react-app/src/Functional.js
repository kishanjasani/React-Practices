import React, { useState } from 'react';
import Person from './Person/Person';

const Functional = () => {
  const state = {
    persons: [
      {name: "Kishan", age: 23},
      {name: "Manav", age: 21},
      {name: "Meet", age: 16}
    ],
    count: 0
  };

  const [personsState, setPersonsState] = useState( state );
  const [countState, setCountState] = useState( state );

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: "Kishan Jasani", age: 23},
        {name: "Manav Jasani", age: 21},
        {name: "Meet Jasani", age: 16}
      ]
    });
  }

  const counterHandler = () => {
    setCountState({count: state.count + 1});
  }

  return (
    <div className="Functional">
      <h1>Hii, It's my First React App</h1>
      <button onClick={counterHandler}>Counter</button>
      <button onClick={switchNameHandler}>Switch Name</button>
      <h2>{countState.count}</h2>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Hobbies: Cricket, Reading Books</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default Functional;