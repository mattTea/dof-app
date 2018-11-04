import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetTrainingResources } from './actions/trainingResources';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import '../src/firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(
  <div className="container loading-text">
    <div>preparing your future</div>
    <div className="loading">
      <img src={require('../public/images/smiley-spinner.png')} style={{maxWidth: "3em", maxHeight: "3em"}}></img>
    </div>
  </div>,
  document.getElementById('app')
);

store.dispatch(startSetTrainingResources()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});