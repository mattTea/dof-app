import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetTrainingResources } from './actions/trainingResources';
import { setTextFilter, setStageFilter, setDisciplineFilter } from './actions/filters';
import getVisibleTrainingResources from './selectors/trainingResources';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import '../src/firebase/firebase';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleTrainingResources = getVisibleTrainingResources(state.trainingResources, state.filters);
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(
  <div className="loading">
    <img src={require('../public/images/smiley-spinner.png')} style={{maxWidth: "5em", maxHeight: "5em"}}></img>
  </div>,
  document.getElementById('app')
);

store.dispatch(startSetTrainingResources()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});