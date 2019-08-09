import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Layout>
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/" exact component={BurgerBuilder} />
            </Switch>
          </Layout>
        </header>
      </div>
    );
  }
}

export default App;
