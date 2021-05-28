import React, { useEffect, useContext } from 'react';

import { CalenderContext } from '../../App';
import { Header } from './Header';
import { DaysOfTheWeek } from './DaysOfTheWeek';
import { Days } from './Days';

const DAYS_OF_THE_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const DAYS_OF_THE_YEAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_OF_THE_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const Calender = () => {
  const {
    year, date, dispatch,
  } = useContext(CalenderContext);

  const isLeapYear = (year % 4 === 0 && year % 100 === 0) || year % 400 === 0;
  const days = isLeapYear ? DAYS_OF_THE_LEAP_YEAR : DAYS_OF_THE_YEAR;

  useEffect(() => {
    dispatch({ type: 'GET_DAY' });
    dispatch({ type: 'GET_YEAR' });
    dispatch({ type: 'GET_MONTH' });
    dispatch({ type: 'GET_START_DAY' });
  }, [date]);

  return (
      <div className="border w-96">
          <Header />
          <DaysOfTheWeek days={ DAYS_OF_THE_WEEK } />
          <Days days={ days }/>
      </div>
  );
};
