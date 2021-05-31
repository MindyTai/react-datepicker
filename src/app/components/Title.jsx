import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { DatePickerContext } from '../../App';

export const Title = ({
  month, handleClick,
}) => {
  const {
    today, year, isYearMonthHeaderClick, isMonthClick, yearCount, dispatch,
  } = useContext(DatePickerContext);

  const currentYear = today.getFullYear();

  useEffect(() => {
    if (year < currentYear - 12 * yearCount + 1) {
      dispatch({ type: 'INCREASE_YEAR_COUNT' });
    } else if (year > currentYear - 12 * (yearCount - 1)) {
      dispatch({ type: 'DECRESE_YEAR_COUNT' });
    }
  }, [year]);

  return (
      <button
        className="h-full w-full word-spacing-wide active:bg-gray-100 focus:outline-none text-xs md:text-lg font-bold"
        onClick={ handleClick }
      >
      { isYearMonthHeaderClick ? year : (isMonthClick ? `${currentYear - 12 * yearCount + 1}-${currentYear - 12 * (yearCount - 1)}` : `${month} ${year}`) }
      </button>
  );
};

Title.propTypes = {
  month: PropTypes.number,
  handleClick: PropTypes.func,
};
