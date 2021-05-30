import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { DatePickerContext } from '../../App';

export const Input = () => {
  const {
    year,
    month,
    day,
    isCalenderOpen,
    isInputYearClick,
    isInputMonthClick,
    isInputDateClick,
    dispatch,
  } = useContext(DatePickerContext);
  console.log(isCalenderOpen, isInputYearClick);
  return (
  <div className='flex border border-gray-400 w-40 bg-white p-2 rounded'>
      <button className={ classNames('flex-1 focus:outline-none', { 'bg-gray-100': isCalenderOpen && isInputYearClick }) }
        onClick={ () => {
          dispatch({ type: 'SET_INPUT_YEAR_CLICK' });
          dispatch({ type: 'OPEN_CALENDER' });
        } }
      >{ year }</button>
      -
    <button className={ classNames('flex-1 focus:outline-none', { 'bg-gray-100': isCalenderOpen && isInputMonthClick }) }
         onClick={ () => {
           dispatch({ type: 'SET_INPUT_MONTH_CLICK' });
           dispatch({ type: 'OPEN_CALENDER' });
         } }
      >{ month + 1 }</button>
      -
      <button className={ classNames('flex-1 focus:outline-none', { 'bg-gray-100': isCalenderOpen && isInputDateClick }) }
        onClick={ () => {
          dispatch({ type: 'SET_INPUT_DATE_CLICK' });
          dispatch({ type: 'OPEN_CALENDER' });
        } }
      >{ day }</button>
   </div>
  );
};

Input.propTypes = {

};
