const filtersReducerDefaultState = {
  text: '',
  stage: '',
  discipline: ''
};

export default (state = filtersReducerDefaultState, action) => {
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