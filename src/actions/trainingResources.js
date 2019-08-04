import uuid from 'uuid';
import database from '../firebase/firebase';

export const addTrainingItem = (trainingResource) => ({
  type: 'ADD_ITEM',
  trainingResource
});

export const startAddTrainingItem = (trainingItemData = {}) => {
  return (dispatch) => {
    const {
      title = '',
      description = '',
      level = '',
      discipline = ''
    } = trainingItemData;
    const trainingResource = { title, description, level, discipline };

    database.ref('trainingResources').push(trainingResource).then((ref) => {
      dispatch(addTrainingItem({
        id: ref.key,
        ...trainingResource
      }));
    });
  };
};

export const removeTrainingItem = ({ id } = {}) => ({
  type: 'REMOVE_ITEM',
  id
});

// SET_TRAINING_RESOURCES
export const setTrainingResources = (trainingResources) => ({
  type: 'SET_TRAINING_RESOURCES',
  trainingResources
});

// START_SET_TRAINING_RESOURCES
export const startSetTrainingResources = () => {
  return (dispatch) => {
    return database.ref('trainingResources').once('value').then((snapshot) => {
      const trainingResources = [];

      snapshot.forEach((childSnapshot) => {
        trainingResources.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setTrainingResources(trainingResources));
    });
  };
};