import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Gigs from '../components/Gigs';
// import Main from '../components/Main';
import NavHeader from '../components/NavHeader';
// import Plays from '../components/Plays';

// const Main = () => (
//   <div>
//     Music component
//   </div>
// );

const Plays = () => (
  <div>
    Theatre component
  </div>
);

// const Gigs = () => (
//   <div>
//     Gigs component
//   </div>
// );

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <NavHeader />
      <Switch>
        {/* <Route path="/" component={Main} exact={true} /> */}
        <Route path="/" component={Gigs} exact={true} />
        <Route path="/plays" component={Plays} />
        <Route component={Gigs} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;