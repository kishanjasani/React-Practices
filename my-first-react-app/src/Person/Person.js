import React from 'react';

const person = (props) => {
    //console.log(props);
    const {name, age, children} = props;
    return (
        <div> I'm a {name} and {age} years old! {children !== undefined ? ' and ' + children : ''} </div>
    );
}

export default person;