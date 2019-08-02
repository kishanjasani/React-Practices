import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('App Constructor');
  }

  state = {
    persons: [
      {name: "Kishan", age: 23, id: 1},
      {name: "Manav", age: 21, id: 2},
      {name: "Meet", age: 16, id: 3}
    ],
    count: 0,
    showPerson: false,
    showCockpit: true
  }

  static getDerivedStateFromProps = (props, state) => {
    console.log('App Derived State Props', props);
    return state;
  };

  componentDidMount() {
    console.log('App componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App ShouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('App ComponentDidUpdate');
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
    console.log("App Rendered");
    let persons = null;
    if (this.state.showPerson){
      persons = (
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangeHandler} />
      );

    }

    return (
      <div className={classes.App}>
        <button onClick={()=>{this.setState({showCockpit:false})}}>Remove Cockpit</button>
        { this.state.showCockpit ?
          <Cockpit
          counterHandler={this.counterHandler}
          togglePersonHandler={this.togglePersonHandler}
          count={this.state.count} />
          : null
        }
        { persons }
      </div>
    );
  }
}

export default App;
