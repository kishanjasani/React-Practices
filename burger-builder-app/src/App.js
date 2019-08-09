import React, {Component} from 'react';
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
            <BurgerBuilder />
            <Checkout />
          </Layout>
        </header>
      </div>
    );
  }
}

export default App;
