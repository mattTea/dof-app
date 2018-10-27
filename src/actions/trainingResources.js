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
      stage = '',
      discipline = ''
    } = trainingItemData;
    const trainingResource = { title, description, stage, discipline };

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