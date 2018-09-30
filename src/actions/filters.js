export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const setStageFilter = (stage = '') => ({
  type: 'SET_STAGE_FILTER',
  stage
});

export const setDisciplineFilter = (discipline = '') => ({
  type: 'SET_DISCIPLINE_FILTER',
  discipline
});