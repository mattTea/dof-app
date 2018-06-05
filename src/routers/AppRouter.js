import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Home from '../components/Home';
import TrainingItemDetail from '../components/TrainingItemDetail';
import TrainingItemList from '../components/TrainingItemList';
import Contact from '../components/Contact';
import About from '../components/About';
import NavHeader from '../components/NavHeader';
import imgUrl from '../../public/images/coffee.jpg';

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
        <Route path="/" component={Home} exact={true} />
        <Route path="/training" component={TrainingItemList} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/training-detail" component={TrainingItemDetail} />
        <Route component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;