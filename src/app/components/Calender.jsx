import React, { useEffect, useContext } from 'react';
import _ from 'lodash';

import { CalenderContext } from '../../App';
import { Header } from './Header';
import { DaysOfTheWeek } from './DaysOfTheWeek';
import { Days } from './Days';
import { Months } from './Months';
import { Years } from './Years';

const DAYS_OF_THE_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const DAYS_OF_THE_YEAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_OF_THE_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export const Calender = () => {
  const {
    year, date, dispatch, isYearMonthHeaderClick, isMonthClick, yearCount,
  } = useContext(CalenderContext);

  const isLeapYear = (year % 4 === 0 && year % 100 === 0) || year % 400 === 0;
  const days = isLeapYear ? DAYS_OF_THE_LEAP_YEAR : DAYS_OF_THE_YEAR;
  const currentYear = new Date().getFullYear();
  const currentYears = _.range(currentYear - 12 * yearCount + 1,
    currentYear - 12 * (yearCount - 1) + 1, 1);

  useEffect(() => {
    dispatch({ type: 'GET_DAY' });
    dispatch({ type: 'GET_YEAR' });
    dispatch({ type: 'GET_MONTH' });
    dispatch({ type: 'GET_START_DAY' });
  }, [date]);

  const renderContent = () => {
    if (!isYearMonthHeaderClick && !isMonthClick) {
      return (
        <>
          <DaysOfTheWeek days={ DAYS_OF_THE_WEEK } />
        <Days days={ days }/>
      </>
      );
    } if (isYearMonthHeaderClick && !isMonthClick) {
      return (
        <Months months={ MONTHS }
          onSelectMonth={ (selectedMonth) => (
            dispatch({ type: 'SET_CURRENT_MONTH', payload: selectedMonth })
          ) }
      />
      );
    } if (!isYearMonthHeaderClick && isMonthClick) {
      return (
        <Years years={ currentYears } onSelectYear= { (selectedYear) => dispatch({ type: 'SET_SELECTED_YEAR', payload: selectedYear }) }/>
      );
    }
  };

  return (
      <div className="border w-96 h-100">
          <Header months = { MONTHS }/>
          { renderContent() }
      </div>
  );
};
