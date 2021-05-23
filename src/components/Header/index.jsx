import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ titleText, style }) => <h1 style={style}>{titleText}</h1>;

Header.propTypes = {
  titleText: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
};

Header.defaultProps = {
  style: {
    backgroundColor: 'gray',
    color: 'black',
    textAlign: 'center',
  },
};

export default Header;
