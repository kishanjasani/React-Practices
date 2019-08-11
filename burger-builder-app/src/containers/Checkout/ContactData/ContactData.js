import React, {Component} from 'React';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({spinner: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Kishan Jasani',
                address: {
                    street: 'ABC',
                    zipCode: '656235',
                    country: 'In'
                },
                email: 'test@hello.com'
            },
            deliveryMethod: 'Fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: true})
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: true})
            });

    }
    render() {
        let form = (
            <form>
                <input type="text" className={classes.Input} name="name" placeholder="your Name" />
                <input type="text" className={classes.Input} name="email" placeholder="your Email" />
                <input type="text" className={classes.Input} name="street" placeholder="your Street" />
                <input type="text" className={classes.Input} name="postalcode" placeholder="your Postalcode" />
                <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
