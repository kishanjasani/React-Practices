import React, {Component} from 'react';
import Aux from '../Aux';
import Model from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {

        constructor(props) {
            super(props);
            this.reqInterceptor = axios.interceptors.response.use(req => {
                this.setState({error: null});
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }

        state = {
            error: null
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }
        render () {
            return (
                <Aux>
                    <Model show={this.state.error} modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Model>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;
