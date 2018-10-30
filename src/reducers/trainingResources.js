const trainingResourcesReducerDefaultState = [];

export default (state = trainingResourcesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.trainingResource
      ];
    case 'REMOVE_ITEM':
      return state.filter(({ id }) => id !== action.id);
    case 'SET_TRAINING_RESOURCES':
      return action.trainingResources;
    default:
      return state;
  }
};