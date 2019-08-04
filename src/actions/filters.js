export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const setLevelFilter = (level = '') => ({
  type: 'SET_LEVEL_FILTER',
  level
});

export const setDisciplineFilter = (discipline = '') => ({
  type: 'SET_DISCIPLINE_FILTER',
  discipline
});