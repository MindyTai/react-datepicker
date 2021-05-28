import React, { useReducer } from 'react';
import { Calender } from './app/components/Calender';
import { calenderReducer } from './app/reducers/CalenderReducer';

const currentDate = new Date();

const initCalendarState = {
  date: currentDate,
  day: currentDate.getDate(),
  month: currentDate.getMonth(),
  year: currentDate.getFullYear(),
  startDay: null,
};

export const CalenderContext = React.createContext({});

const App = () => {
  const [state, dispatch] = useReducer(calenderReducer, initCalendarState);
  return (
        <div className="container mx-auto w-full pt-20 flex flex-col items-center">
            <h2 className="text-primary text-2xl font-bold mb-12">
              Welcome to the calender app!
            </h2>
            <CalenderContext.Provider
                value={ {
                  date: state.date,
                  day: state.day,
                  month: state.month,
                  year: state.year,
                  startDay: state.startDay,
                  dispatch,
                } }
            >
                <Calender />
            </CalenderContext.Provider>
        </div>
  );
};

export default App;
