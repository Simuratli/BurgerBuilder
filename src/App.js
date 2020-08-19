import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilders from './/containers/BurgerBuilder/BurgerBuilders'
import './App.css';


class App extends Component {
  render() {
    return (
      <div  className="App">
       <Layout>
         <BurgerBuilders></BurgerBuilders>
       </Layout>
      </div>
    );
  }
}

export default App;
