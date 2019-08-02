import React, { useEffect } from 'react';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    // Similar to componentDidMount and componentDidUpdate:
    // Only run when persons component update
    // useEffect(() => {
    //     setTimeout(()=> {console.log('Fack Request')}, 1000);
    //     console.log('Cockpit Hello');
    // }, [props.persons]);
    // Only run for first time
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setTimeout(()=> {alert('Fack Request')}, 1000);
        console.log('Cockpit useEffect');
        return () => {
            console.log('Cockpit clean up in UseEffect');
        };
    }, []);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('Cockpit 2nd useEffect');
        return () => {
            console.log('Cockpit clean up in 2nd UseEffect');
        };
    });

    return (
        <Aux>
            <h1>Hii, It's my First React App</h1>
            <button key="1" onClick={props.counterHandler}>Counter</button>
            <button key="2" onClick={props.togglePersonHandler}>Show / Hide Persons</button>
            <h2>{props.count}</h2>
        </Aux>
    );
}

export default React.memo(cockpit);
