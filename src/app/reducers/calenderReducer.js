export const calenderReducer = (state, action) => {
  switch (action.type) {
    case 'GET_MONTH':
      return { ...state, month: state.date.getMonth() };
    case 'GET_YEAR':
      return { ...state, year: state.date.getFullYear() };
    case 'GET_DAY':
      return { ...state, day: state.date.getDate() };
    case 'GET_NEXT_MONTH':
      return { ...state, date: new Date(state.year, state.month + 1, state.day) };
    case 'GET_PREV_MONTH':
      return { ...state, date: new Date(state.year, state.month - 1, state.day) };
    case 'GET_START_DAY':
      return { ...state, startDay: new Date(state.year, state.month, 1).getDay()};
    case 'SET_SELECTED_DATE':
      return {...state, date: new Date(state.year, state.month, action.payload)}
    default:
      return state;
  }
};
