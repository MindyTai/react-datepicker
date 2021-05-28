import React from 'react';
import Proptypes from 'prop-types';

export const Day = ({ day }) => (
    <div className="w-13 h-16">
      { day }
    </div>
);

Day.propTypes = {
  day: Proptypes.number,
};
