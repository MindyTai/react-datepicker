import React from 'react';
import PropTypes from 'prop-types';

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export const Title = ({ year, month }) => (
    <div>
      { year }
      { MONTHS[month] }
    </div>
);

Title.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
};
