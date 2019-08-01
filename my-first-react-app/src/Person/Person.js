import React from 'react';
import classes from './Person.css';

const person = (props) => {
    // console.log(props);
    const {name, age, click, changed, children} = props;

    const random = Math.random();
    if (random > 0.7) {
      throw new Error('Something went wrong!');
    }

    return (
        <div className={classes.person}>
            <p onClick={click}>I'm a {name} and {age} years old! {children !== undefined ? ' and ' + children : ''}</p>
            <input type="text" onChange={changed} value={name}/>
        </div>
    );
}

export default person;