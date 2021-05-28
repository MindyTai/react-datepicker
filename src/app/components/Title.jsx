import React from 'react';
import PropTypes from 'prop-types';

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export const Title = ({ year, month }) => (
    <span className="w-full text-lg word-spacing-wide">
      { `${MONTHS[month]} ${year}` }
    </span>
);

Title.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
};
