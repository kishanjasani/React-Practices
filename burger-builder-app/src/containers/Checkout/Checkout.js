import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            bacon: 1,
            cheese: 1
        }
    }
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    checkoutCanclledHandler = () => {
        this.props.history.goBack();
    }
    render() {
        return(
            <div>
                <CheckoutSummary checkoutCanclled={this.checkoutCanclledHandler} checkoutContinued = {this.checkoutContinuedHandler} ingredients={this.state.ingredients}/>
            </div>
        );
    }
}

export default Checkout;
