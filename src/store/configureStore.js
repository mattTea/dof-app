import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import trainingResourcesReducer from '../reducers/trainingResources';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {

  let middleware = [ thunk ]
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV !== 'production') {
    middleware = [ ...middleware, logger ]
  }
  const store = createStore(
    combineReducers({
      trainingResources: trainingResourcesReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(...middleware))
  );

  return store;
};

