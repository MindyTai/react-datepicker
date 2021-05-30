export const datePickerReducer = (state, action) => {
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
    return {...state, isYearMonthHeaderClick: true, isMonthClick: false};
    case 'SET_CURRENT_MONTH':
      return {...state, date: new Date(state.year, action.payload, state.day), 
              isYearMonthHeaderClick: false, isMonthClick: false}
    case 'SET_MONTH_CLICK':
    return {...state, isYearMonthHeaderClick: false, isMonthClick: true}
    case 'SET_YEAR_CLICK':
    return {...state, isYearMonthHeaderClick: false,  isMonthClick: false}
    case 'SET_NEXT_YEAR':
      return {...state, date: new Date(state.year + 1, state.month, state.day)}
    case 'SET_PREV_YEAR':
      return {...state, date: new Date(state.year - 1, state.month, state.day)}
    case 'SET_PREV_DAY':
      return { ...state, date: new Date(state.year, state.month, state.day - 1) };
    case 'SET_NEXT_DAY':
      return { ...state, date: new Date(state.year, state.month, state.day + 1) };
    case 'SET_SELECTED_YEAR':
      return {...state, date: new Date(action.payload, state.month, state.day), isYearMonthHeaderClick: true, isMonthClick: false }
    case 'DECRESE_YEAR_COUNT':
    return {...state, yearCount: state.yearCount - 1}
    case 'INCREASE_YEAR_COUNT':
      return {...state, yearCount: state.yearCount + 1  }
    case 'OPEN_CALENDER':
      return {...state, isCalenderOpen: true}
    case 'CLOSE_CALENDER':
      return {...state, isCalenderOpen: false,isInputYearClick: false, isInputMonthClick: false, isInputDateClick: false}
    case 'SET_INPUT_YEAR_CLICK':
      return {...state, isInputYearClick: true, isInputMonthClick: false, isInputDateClick: false}
    case 'SET_INPUT_MONTH_CLICK':
      return {...state, isInputMonthClick: true, isInputYearClick: false, isInputDateClick: false}
    case 'SET_INPUT_DATE_CLICK':
    return {...state, isInputDateClick: true, isInputYearClick: false, isInputMonthClick: false}
    default:
      return state;
  }
};
