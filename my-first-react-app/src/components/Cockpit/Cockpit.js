import React from 'react';

const cockpit = (props) => {
    return (
        <div>
            <h1>Hii, It's my First React App</h1>
            <button key="1" onClick={props.counterHandler}>Counter</button>
            <button key="2" onClick={props.togglePersonHandler}>Show / Hide Persons</button>
            <h2>{props.count}</h2>
        </div>
    );
}

export default cockpit;
