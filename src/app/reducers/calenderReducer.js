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
      return {...state, date: new Date(state.year, state.month, action.payload)};
    case 'SET_YEAR_MONTH_HEADER_ClICK':
      return {...state, isYearMonthHeaderClick: true};
    case 'SET_CURRENT_MONTH':
      return {...state, date: new Date(state.year, action.payload, state.day)}
    case 'SET_MONTH_CLICK':
      return {...state, isMonthClick: true, isYearMonthHeaderClick: false}
    case 'SET_YEAR_CLICK':
      return {...state, isYearMonthHeaderClick: false, isMonthClick: false}
    case 'SET_NEXT_YEAR':
      return {...state, yearCount: state.yearCount - 1}
    case 'SET_PREV_YEAR':
      return {...state, yearCount: state.yearCount + 1}
    default:
      return state;
  }
};
