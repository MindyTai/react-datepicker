import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { DatePickerContext } from '../../App';

export const Months = ({ months, onSelectMonth }) => {
  const {
    month: currentMonth,
  } = useContext(DatePickerContext);

  return (
    <div className="flex items-center h-5/6 sm:h-full p-2">
      <div className="flex flex-wrap text-center h-full justify-center">
        { months.map((month, idx) => <button key={ month }
            className={ classNames('w-1/6 h-1/6 mx-1 sm:w-1/5 sm:h-1/5 flex items-center justify-center text-sm sm:text-xl rounded-full focus:outline-none',
              { 'bg-red-0 text-white': month === months[currentMonth] }) }
            onClick={ () => onSelectMonth(idx) }
            >
                { month }
            </button>)
         }
      </div>
    </div>
  );
};

Months.propTypes = {
  months: PropTypes.array,
  onSelectMonth: PropTypes.func,
};
