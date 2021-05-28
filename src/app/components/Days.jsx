import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Day } from './Day';
import { CalenderContext } from '../../App';

export const Days = ({ days }) => {
  const {
    month, startDay,
  } = useContext(CalenderContext);

  const daysOfTheMonth = Array(days[month] + startDay - 1).fill(null);

  return (
    <div className="border flex flex-wrap text-center">
      { daysOfTheMonth.map((_, idx) => {
        const day = idx - startDay + 1;
        return <Day key={ idx } day={ day > 0 ? day : '' }/>;
      }) }
    </div>
  );
};

Days.propTypes = {
  days: PropTypes.array,
};
