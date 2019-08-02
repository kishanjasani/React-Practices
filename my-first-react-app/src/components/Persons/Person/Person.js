import React, {Component} from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
    render() {
        // console.log(props);
        console.log('Person Rendering');
        const {name, age, click, changed, children} = this.props;

        return (
            <div className={classes.person}>
                <AuthContext.Consumer>
                    { context => context.authenticated ? <p>Authenticated!</p> : <p>Please Login</p>}
                </AuthContext.Consumer>
                <p onClick={click}>I'm a {name} and {age} years old! {children !== undefined ? ' and ' + children : ''}</p>
                <input
                // ref={(inputEl) => {this.inputElement = inputEl}}
                ref={this.inputElementRef}
                type="text"
                onChange={changed}
                value={name}/>
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