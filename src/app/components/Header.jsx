import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { CalenderContext } from '../../App';
import { Button } from './Button';
import { Title } from './Title';

export const Header = ({ months }) => {
  const {
    year, month, dispatch,
  } = useContext(CalenderContext);

  return (
    <div className="flex justify-evenly items-center h-12">
      <Button type={ '<' } handleClick={ () => dispatch({ type: 'GET_PREV_MONTH' }) } />
      <Title month={ months[month] } handleClick={ () => dispatch({ type: 'SET_HEADER_ClICK' }) }/>
      <Button type={ '>' } handleClick={ () => dispatch({ type: 'GET_NEXT_MONTH' }) } />
    </div>
  );
};

Header.propTypes = {
  months: PropTypes.array,
};
