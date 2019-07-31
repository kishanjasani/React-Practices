import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hii, It's my First React App</h1>
      <Person name="Kishan" age="23" />
      <Person name="Manav" age="21">Hobbies: Cricket, Reading Books</Person>
      <Person name="Meet" age="16" />
    </div>
  );
}

export default App;
