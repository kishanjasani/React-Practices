import React from 'react';
import './Person.css';

const person = (props) => {
    //console.log(props);
    const {name, age, click, changed, children} = props;
    return (
        <div className="person">
            <p onClick={click}>I'm a {name} and {age} years old! {children !== undefined ? ' and ' + children : ''}</p>
            <input type="text" onChange={changed} value={name}/>
        </div>
    );
}

export default person;