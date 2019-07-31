import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: "Kishan", age: 23},
      {name: "Manav", age: 21},
      {name: "Meet", age: 16}
    ],
    count: 0
  }

  switchNameHandler = () => {
    this.setState( {
      persons: [
        {name: "Kishan Jasani", age: 22},
        {name: "Manav", age: 21},
        {name: "Meet Jasani", age: 15}
      ]
    })
  }

  counterHandler = () => {
    //console.log(this.state.count);
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div className="App">
        <h1>Hii, It's my First React App</h1>
        <button onClick={this.counterHandler}>Counter</button>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <h2>{this.state.count + ""}</h2>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Cricket, Reading Books</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
