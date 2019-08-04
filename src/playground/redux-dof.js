import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addTrainingItem = (
  {
    title = '',
    description = '',
    level = '',
    discipline = ''
  } = {}
) => ({
  type: 'ADD_ITEM',
  trainingResource: {
    id: uuid(),
    title,
    description,
    level,
    discipline
  }
});

const removeTrainingItem = ({ id } = {}) => ({
  type: 'REMOVE_ITEM',
  id
});

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const setLevelFilter = (level = '') => ({
  type: 'SET_LEVEL_FILTER',
  level
});

const setDisciplineFilter = (discipline = '') => ({
  type: 'SET_DISCIPLINE_FILTER',
  discipline
});

const trainingResourcesReducerDefaultState = [];

const trainingResourcesReducer = (state = trainingResourcesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.trainingResource
      ];
    case 'REMOVE_ITEM':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};


const filtersReducerDefaultState = {
  text: '',
  level: '',
  discipline: ''
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SET_LEVEL_FILTER':
      return {
        ...state,
        level: action.level
      };
    case 'SET_DISCIPLINE_FILTER':
      return {
        ...state,
        discipline: action.discipline
      }
    default:
      return state;
  }
};

const getVisibleTrainingResources = (trainingResources, { text, level, discipline }) => {
  return trainingResources.filter((trainingResource) => {
    const textMatch = JSON.stringify(trainingResource).toLowerCase().includes(text.toLowerCase());
    const levelMatch = JSON.stringify(trainingResource.level).toLowerCase().includes(level.toLowerCase());
    const disciplineMatch = JSON.stringify(trainingResource.discipline).toLowerCase().includes(discipline.toLowerCase());
    
    return textMatch && levelMatch && disciplineMatch;
  });
};

const store = createStore(
  combineReducers({
    trainingResources: trainingResourcesReducer,
    filters: filtersReducer 
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleTrainingResources = getVisibleTrainingResources(state.trainingResources, state.filters);
  console.log(visibleTrainingResources);
});

const trainingItemOne = store.dispatch(addTrainingItem({ title: 'BDD', description: 'Intro to BDD', level: 'Beginner', discipline: 'Analysis' }));
const trainingItemTwo = store.dispatch(addTrainingItem({ title: 'BDD_2', description: 'How to BDD', level: 'Intermediate', discipline: 'Test' }));

// store.dispatch(removeTrainingItem({ id: trainingItemOne.trainingResource.id }));

// store.dispatch(setTextFilter('how to'));
// store.dispatch(setTextFilter(''));

store.dispatch(setLevelFilter('Delivery Fundamentals'));
// store.dispatch(setLevelFilter(''));

// store.dispatch(setDisciplineFilter('Analysis'));
// store.dispatch(setDisciplineFilter(''));

const demoState = {
  trainingResources: [{
    id: 'someId',
    title: 'Course Title',
    description: 'You can learn this stuff!',
    level: 'Delivery Fundamentals',
    discipline: 'Analysis'
  }],
  filters: {
    text: '',
    level: 'All',
    discipline: 'All'
  }
}