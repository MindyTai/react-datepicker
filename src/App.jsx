import React, { useReducer } from 'react';

import { Calender } from './app/components/Calender';
import { Input } from './app/components/Input';
import { datePickerReducer } from './app/reducers/datePickerReducer';

const currentDate = new Date();

const initDatePickerState = {
  today: new Date(),
  date: currentDate,
  day: currentDate.getDate(),
  month: currentDate.getMonth(),
  year: currentDate.getFullYear(),
  isYearMonthHeaderClick: false,
  isMonthClick: false,
  startDay: null,
  yearCount: 1,
  isCalenderOpen: false,
  isInputYearClick: false,
  isInputMonthClick: false,
  isInputDateClick: false,
};

export const DatePickerContext = React.createContext({});

const App = () => {
  const [state, dispatch] = useReducer(datePickerReducer, initDatePickerState);
  return (
        <div className="container mx-auto w-full pt-20 flex flex-col items-center">
            <h2 className="text-primary text-base sm:text-2xl font-bold mb-12">
              Welcome to the calender app!
            </h2>
            <DatePickerContext.Provider
                value={ {
                  today: state.today,
                  date: state.date,
                  day: state.day,
                  month: state.month,
                  year: state.year,
                  startDay: state.startDay,
                  isYearMonthHeaderClick: state.isYearMonthHeaderClick,
                  isMonthClick: state.isMonthClick,
                  yearCount: state.yearCount,
                  isCalenderOpen: state.isCalenderOpen,
                  isInputYearClick: state.isInputYearClick,
                  isInputMonthClick: state.isInputMonthClick,
                  isInputDateClick: state.isInputDateClick,
                  dispatch,
                } }
            >
              <Input />
              <Calender />
            </DatePickerContext.Provider>
        </div>
  );
};

export default App;
