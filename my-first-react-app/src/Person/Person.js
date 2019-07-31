import React from 'react';

const person = (props) => {
    //console.log(props);
    const {name, age, click, changed, children} = props;
    return (
        <div>
            <p onClick={click}>I'm a {name} and {age} years old! {children !== undefined ? ' and ' + children : ''}</p>
            <input type="text" onChange={changed} value={name}/>
        </div>
    );
}

export default person;