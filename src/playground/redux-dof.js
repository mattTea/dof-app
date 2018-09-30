import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addTrainingItem = (
  {
    title = '',
    description = '',
    stage = '',
    discipline = ''
  } = {}
) => ({
  type: 'ADD_ITEM',
  trainingResource: {
    id: uuid(),
    title,
    description,
    stage,
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

const setStageFilter = (stage = '') => ({
  type: 'SET_STAGE_FILTER',
  stage
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
  stage: '',
  discipline: ''
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SET_STAGE_FILTER':
      return {
        ...state,
        stage: action.stage
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

const getVisibleTrainingResources = (trainingResources, { text, stage, discipline }) => {
  return trainingResources.filter((trainingResource) => {
    const textMatch = JSON.stringify(trainingResource).toLowerCase().includes(text.toLowerCase());
    const stageMatch = JSON.stringify(trainingResource.stage).toLowerCase().includes(stage.toLowerCase());
    const disciplineMatch = JSON.stringify(trainingResource.discipline).toLowerCase().includes(discipline.toLowerCase());
    
    return textMatch && stageMatch && disciplineMatch;
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

const trainingItemOne = store.dispatch(addTrainingItem({ title: 'BDD', description: 'Intro to BDD', stage: 'Delivery Fundamentals', discipline: 'Analysis' }));
const trainingItemTwo = store.dispatch(addTrainingItem({ title: 'BDD_2', description: 'How to BDD', stage: 'Individual Choice', discipline: 'Test' }));

// store.dispatch(removeTrainingItem({ id: trainingItemOne.trainingResource.id }));

// store.dispatch(setTextFilter('how to'));
// store.dispatch(setTextFilter(''));

store.dispatch(setStageFilter('Delivery Fundamentals'));
// store.dispatch(setStageFilter(''));

// store.dispatch(setDisciplineFilter('Analysis'));
// store.dispatch(setDisciplineFilter(''));

const demoState = {
  trainingResources: [{
    id: 'someId',
    title: 'Course Title',
    description: 'You can learn this stuff!',
    stage: 'Delivery Fundamentals',
    discipline: 'Analysis'
  }],
  filters: {
    text: '',
    stage: 'All',
    discipline: 'All'
  }
}