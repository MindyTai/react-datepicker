import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { CalenderContext } from '../../App';

export const Title = ({
  month, handleClick,
}) => {
  const {
    year, isYearMonthHeaderClick, isMonthClick, yearCount,
  } = useContext(CalenderContext);

  return (
      <button
        className="h-full w-full text-lg word-spacing-wide bg-gray-100 active:bg-green-200 focus:outline-none"
        onClick={ handleClick }
      >
        { isYearMonthHeaderClick ? year : (isMonthClick ? `${year - 12 * yearCount + 1}-${year - 12 * (yearCount - 1)}` : `${month} ${year}`) }
      </button>
  );
};

Title.propTypes = {
  month: PropTypes.number,
  handleClick: PropTypes.func,
};
