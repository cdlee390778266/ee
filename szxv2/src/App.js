import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.scss';

import Head from './components/common/head'
import Foot from './components/common/foot'
import Index from './components/public/home/index'
import Home from './components/public/home/home'
// import Home from './components/public/home/support-index'
import Apply from './components/public/apply/apply'
import Admin from './components/admin/admin'
import Order from './components/admin/order'
import Product from './components/public/product/package'

class App extends Component {

  render() {
    return (
      <div>
      	<Head />
          <Route exact path='/' component={Index} />
          <Route exact path='/index' component={Index} />
      		<Route path="/home" component={Home} />
	        <Route path="/apply" component={Apply}/>
	        <Route path="/admin" component={Admin}/>
          <Route path="/order" component={Order} />
          <Route path="/product" component={Product} />
      	<Foot />
      </div>
    );
  }
}

export default App;
