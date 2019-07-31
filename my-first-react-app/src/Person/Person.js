import React from 'react';

const person = (props) => {
    console.log(props);
    const {name, age} = props;
    return (
        <div> I'm a {name} and {age} years old! </div>
    );
}

export default person;