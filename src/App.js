import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Home from './pages/home';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import Navbar from './components/Navbar';






function App() {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
}

  return (
    <Router>
      <Navbar toggle={toggle}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
      </Switch>
    </Router>
  );
}

export default App;
