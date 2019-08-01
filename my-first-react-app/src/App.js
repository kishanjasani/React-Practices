import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry';

class App extends Component {

  state = {
    persons: [
      {name: "Kishan", age: 23, id: 1},
      {name: "Manav", age: 21, id: 2},
      {name: "Meet", age: 16, id: 3}
    ],
    count: 0,
    showPerson: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    // OR
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  counterHandler = () => {
    //console.log(this.state.count);
    this.setState({count: this.state.count + 1});
  }

  togglePersonHandler = () => {
      const doesShow = this.state.showPerson;
      this.setState({showPerson: !doesShow});
  }

  render() {

    let persons = null;
    if (this.state.showPerson){
      persons = (
        <div>
        {
          this.state.persons.map((person, index) => {
            return <ErrorBoundry key={person.id}><Person
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangeHandler(event, person.id)}
            name={person.name}
            age={person.age} /></ErrorBoundry>
          })
        }
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}>Hobbies: Cricket, Reading Books</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, "Mitlo")}
            changed={this.nameChangeHandler}/> */}
        </div>
      );

    }

    return (
      <div className={classes.App}>
        <h1>Hii, It's my First React App</h1>
        <button key="1" onClick={this.counterHandler}>Counter</button>
        <button key="2" onClick={this.togglePersonHandler}>Show / Hide Persons</button>
        <h2>{this.state.count}</h2>
        { persons }
      </div>
    );
  }
}

export default App;
