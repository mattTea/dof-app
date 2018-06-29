import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from '../components/Home';
import TrainingItemDetail from '../components/TrainingItemDetail';
import TrainingPage from '../components/TrainingPage';
import Contact from '../components/Contact';
import Booking from '../components/Booking';
import NavHeader from '../components/NavHeader';
import Add from '../components/Add'
import imgUrl from '../../public/images/coffee.jpg';

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
  <BrowserRouter>
    <div style={styles}>
      <NavHeader />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/training" component={TrainingPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/booking" component={Booking} />
        <Route path="/training-detail" component={TrainingItemDetail} />
        <Route path="/add" component={Add} />
        <Route component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
