import React, {Component} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Layout>
            <BurgerBuilder />
          </Layout>
        </header>
      </div>
    );
  }
}

export default App;
