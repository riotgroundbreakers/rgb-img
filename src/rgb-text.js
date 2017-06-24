import React from 'react';
import PropTypes from 'prop-types';

function Text(props) {
  return <p>{props.text}</p>
}

Text.propTypes = {
  text: PropTypes.string.isRequired
};

export default Text;