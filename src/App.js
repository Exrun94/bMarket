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
import ClaimBonusPage from './pages/claimBonus';
import CoinDetailsPage from './pages/coinDetails';


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
				<PrivateRoute path="/claim-bonus" component={ClaimBonusPage} />
				<PrivateRoute path="/:id" component={CoinDetailsPage} />
			</Switch>
		</Router>
	</AuthProvider>
  );
}

export default App;
