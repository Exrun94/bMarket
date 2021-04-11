import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import Home from './pages/home';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import Marketplace from './pages/marketplace';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './pages/forgotPassword';
import UpdateProfilePage from './pages/updateProfile';


function App() {

  return (
	<AuthProvider>
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/signin" component={SignInPage} />
				<Route path="/signup" component={SignUpPage} />
				<Route path="/forgot-password" component={ForgotPassword} />
				<PrivateRoute path="/marketplace" component={Marketplace} />
				<PrivateRoute path="/update-profile" component={UpdateProfilePage} />
			</Switch>
		</Router>
	</AuthProvider>
  );
}

export default App;
