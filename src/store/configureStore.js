import { createStore, combineReducers } from 'redux';
import trainingResourcesReducer from '../reducers/trainingResources';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      trainingResources: trainingResourcesReducer,
      filters: filtersReducer 
    })
  );

  return store
};

