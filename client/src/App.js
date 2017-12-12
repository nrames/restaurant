import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Menu from './components/Menu';
import Product from './components/Product';
import ProtectedRoute from './components/ProtectedRoute';
import ProductForm from './components/ProductForm';
import { Segment } from 'semantic-ui-react';

const App = () => (
  <Segment basic>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <ProtectedRoute exact path='/menu' component={Menu} />
      <ProtectedRoute exact path='/products/:id' component={Product} />
      <ProtectedRoute exact path='/products/:id/edit' component={ProductForm} />

      <Route component={NoMatch} />
    </Switch>
  </Segment>
);

export default App;