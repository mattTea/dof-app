const filtersReducerDefaultState = {
  text: '',
  level: '',
  discipline: ''
};

export default (state = filtersReducerDefaultState, action) => {
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