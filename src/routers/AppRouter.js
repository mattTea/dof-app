import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Gigs from '../components/Gigs';
import NavHeader from '../components/NavHeader';
import Plays from '../components/Plays';
import imgUrl from '../../public/images/hands-up.jpg';

const styles = {
  backgroundImage: `url(${imgUrl})`,
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
        <Route path="/" component={Gigs} exact={true} />
        <Route path="/plays" component={Plays} />
        <Route component={Gigs} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;