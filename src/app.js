import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetTrainingResources } from './actions/trainingResources'; // import startSetTrainingResources to fetch from firebase
import { setTextFilter, setStageFilter, setDisciplineFilter } from './actions/filters';
import getVisibleTrainingResources from './selectors/trainingResources';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import '../src/firebase/firebase';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleTrainingResources = getVisibleTrainingResources(state.trainingResources, state.filters);
  // console.log(visibleTrainingResources);
});

// store.dispatch(startAddTrainingItem({ title: 'BDD', description: 'Intro to BDD', stage: 'Delivery Fundamentals', discipline: 'Analysis' }));
// store.dispatch(startAddTrainingItem({ title: 'BDD_2', description: 'How to BDD', stage: 'Individual Choice', discipline: 'Test' }));

// store.dispatch(setTextFilter('how to'));

// console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// ReactDOM.render(<AppRouter />, document.getElementById('app'));
// ReactDOM.render(jsx, document.getElementById('app'));

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetTrainingResources()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});