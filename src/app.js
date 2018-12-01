import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetTrainingResources } from './actions/trainingResources';
import { login, logout } from './actions/auth';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from '../src/firebase/firebase';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(
  <div className="container loading-text">
    <div>preparing your future</div>
    <div className="loading">
      <img src={require('../public/images/smiley-spinner.png')} style={{maxWidth: "3em", maxHeight: "3em"}}></img>
    </div>
  </div>,
  document.getElementById('app')
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetTrainingResources()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/training');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});