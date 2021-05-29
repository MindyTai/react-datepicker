import React from 'react';
import PropTypes from 'prop-types';

export const Months = ({ months }) => (
  <div className="flex items-center h-full">
    <div className="flex flex-wrap text-center h-3/6">
        { months.map((month) => <button key={ month } className="w-3/12 h-1/6 flex items-center justify-center text-xl rounded-full focus:outline-none"> { month } </button>) }
    </div>
  </div>
);

Months.propTypes = {
  months: PropTypes.array,
};
