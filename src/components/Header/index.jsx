import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ titleText, style, color }) => (
  <h1 style={style}>
    Hello,&nbsp;
    <span style={{ color }}>{titleText}</span>
  </h1>
);

// props checking
Header.propTypes = {
  titleText: PropTypes.string.isRequired,
  color: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

Header.defaultProps = {
  style: {
    backgroundColor: 'gray',
    color: 'black',
    textAlign: 'center',
  },
  color: 'black',
};

export default Header;
