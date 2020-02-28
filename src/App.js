import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal'
import CompareModal from './components/CompareModal';
import CompareProduct from './components/Compare Products/CompareProduct';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ProductList}></Route>
          <Route path='/details' component={Details}></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route path='/compare' component={CompareProduct}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal/>
        <CompareModal />
      </React.Fragment>
    );
  } 
}

export default App;
