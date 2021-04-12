import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './PrivateRoute'

import HomePage from './pages/home';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import MarketplacePage from './pages/marketplace';
import ForgotPasswordPage from './pages/forgotPassword';
import UpdateProfilePage from './pages/updateProfile';
import ClaimBonusPage from './pages/claimBonus';
import CoinDetailsPage from './pages/coinDetails';
import WalletPage from './pages/wallet'


function App() {

  return (
	<AuthProvider>
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/signin" component={SignInPage} />
				<Route path="/signup" component={SignUpPage} />
				<Route path="/forgot-password" component={ForgotPasswordPage} />
				<PrivateRoute path="/marketplace" component={MarketplacePage} />
				<PrivateRoute path="/update-profile" component={UpdateProfilePage} />
				<PrivateRoute path="/claim-bonus" component={ClaimBonusPage} />
				<PrivateRoute path="/my-wallet" component={WalletPage} />
				<PrivateRoute path="/:id" component={CoinDetailsPage} />
			</Switch>
		</Router>
	</AuthProvider>
  );
}

export default App;
