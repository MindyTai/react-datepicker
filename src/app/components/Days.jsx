import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Day } from './Day';
import { DatePickerContext } from '../../App';

export const Days = ({ days }) => {
  const {
    today, year, month, startDay, day: currentDay, dispatch,
  } = useContext(DatePickerContext);

  const lastMonthDays = _.rangeRight(days[month - 1], days[month - 1] - startDay);
  const currentMonthDays = _.range(1, days[month] + 1, 1);
  const nextMonthDaysCount = 7 * 6 - lastMonthDays.length - currentMonthDays.length;
  const nextMonthDays = _.range(1, nextMonthDaysCount + 1, 1);
  const currentMonthIndexs = _.range(startDay, days[month] + startDay, 1);
  const daysOfTheMonth = [...lastMonthDays, ...currentMonthDays, ...nextMonthDays];

  const isToday = (d) => today.getFullYear() === year
    && today.getMonth() === month && today.getDate() === d;

  return (
    <div className="flex flex-wrap text-center justify-evenly">
      { daysOfTheMonth.map((day, idx) => (
         <Day key={ idx }
              day={ day }
              isSelected={ day === currentDay }
              isCurrentMonth={ !!currentMonthIndexs.includes(idx) }
              handleClick={ () => {
                dispatch({ type: 'SET_SELECTED_DATE', payload: day });
                dispatch({ type: 'CLOSE_CALENDER' });
              } }
              isToday={ isToday(day) }
          />)) }
    </div>
  );
};

Days.propTypes = {
  days: PropTypes.array,
};
