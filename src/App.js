import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Home from './pages/home';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import Marketplace from './pages/marketplace';





function App() {


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/marketplace" component={Marketplace} />
      </Switch>
    </Router>
  );
}

export default App;
