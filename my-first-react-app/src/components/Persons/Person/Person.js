import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
    render() {
        // console.log(props);
        console.log('Person Rendering');
        const {name, age, click, changed, children} = this.props;

        return (
            <div className={classes.person}>
                <p onClick={click}>I'm a {name} and {age} years old! {children !== undefined ? ' and ' + children : ''}</p>
                <input type="text" onChange={changed} value={name}/>
            </div>
        );
    }
}

export default Person;