import React, {Component} from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

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

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      margin: '0 1rem',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.showPerson){
      persons = (
        <div>
        {
          this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangeHandler(event, person.id)}
            name={person.name}
            age={person.age}
            key={person.id}/>;
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
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    return (
      <div className="App">
        <h1>Hii, It's my First React App</h1>
        <button style={style} key="1" onClick={this.counterHandler}>Counter</button>
        <button style={style} key="2" onClick={this.togglePersonHandler}>Show / Hide Persons</button>
        <h2>{this.state.count}</h2>
        { persons }
      </div>
    );
  }
}

export default Radium(App);
