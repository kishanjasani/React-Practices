import React, {Component} from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';

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

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;