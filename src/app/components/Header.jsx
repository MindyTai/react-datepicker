import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { DatePickerContext } from '../../App';
import { Button } from './Button';
import { Title } from './Title';

export const Header = ({ months }) => {
  const {
    month, dispatch, isMonthClick, isYearMonthHeaderClick, yearCount,
  } = useContext(DatePickerContext);

  const handleTitleClick = () => {
    if (!isYearMonthHeaderClick && !isMonthClick) {
      dispatch({ type: 'SET_YEAR_MONTH_HEADER_ClICK' });
    } else if (isYearMonthHeaderClick) {
      dispatch({ type: 'SET_MONTH_CLICK' });
    } else {
      dispatch({ type: 'SET_YEAR_CLICK' });
    }
  };

  const handlePrevClick = () => {
    if (!isYearMonthHeaderClick && !isMonthClick) {
      dispatch({ type: 'SET_PREV_DAY' });
    } else if (isYearMonthHeaderClick) {
      dispatch({ type: 'GET_PREV_MONTH' });
    } else {
      dispatch({ type: 'SET_PREV_YEAR' });
    }
  };

  const handleNextClick = () => {
    if (!isYearMonthHeaderClick && !isMonthClick) {
      dispatch({ type: 'SET_NEXT_DAY' });
    } else if (isYearMonthHeaderClick) {
      dispatch({ type: 'GET_NEXT_MONTH' });
    } else {
      dispatch({ type: 'SET_NEXT_YEAR' });
    }
  };

  return (
    <div className="flex justify-evenly items-center h-12">
      <Button type={ '<' } handleClick={ handlePrevClick } />
      <Title month={ months[month] } handleClick={ handleTitleClick } />
      <Button type={ '>' } handleClick={ handleNextClick } disabled={ yearCount === 1 && !isYearMonthHeaderClick && isMonthClick } />
    </div>
  );
};

Header.propTypes = {
  months: PropTypes.array,
};
