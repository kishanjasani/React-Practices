import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    /* static getDerivedStateFromProps(props, state) {
        console.log('Persons getDerived State');
        return state;
     } */

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Persons Should component Update');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Persons snapshot before Update');
        return {message: 'Snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Persons component did Update');
        console.log(snapshot);
    }

    render() {
        console.log('Persons Rendering');
        return this.props.persons.map((person, index) => {
            return <Person
            click={() => this.props.clicked(index)}
            changed={(event) => this.props.changed(event, person.id)}
            name={person.name}
            age={person.age}
            key={person.id} />
        })
    }
};

export default Persons;
