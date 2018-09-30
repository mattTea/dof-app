import uuid from 'uuid';

export const addTrainingItem = (
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

export const removeTrainingItem = ({ id } = {}) => ({
  type: 'REMOVE_ITEM',
  id
});