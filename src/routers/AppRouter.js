import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from '../components/Home';
import TrainingPage from '../components/TrainingPage';
import Contact from '../components/Contact';
import Booking from '../components/Booking';
import LoginPage from '../components/Login';
import NotFoundPage from '../components/NotFoundPage';
import imgUrl from '../../public/images/coffee.jpg';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const styles = {
  backgroundImage: `url(${imgUrl})`,
  backgroundColor: '#c0c5da5e',
  backgroundSize: 'cover',
  height: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed'
};

const AppRouter = () => (
  <Router history={history}>
    <div style={styles}>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/training" component={TrainingPage} />
        <PrivateRoute path="/contact" component={Contact} />
        <PrivateRoute path="/booking" component={Booking} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>  
);

export default AppRouter;