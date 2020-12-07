import React from 'react';
import PropTypes from 'prop-types';

const Button = ({className, buttonText, clickFunc }) => {
	return(
		<button className = {className} onClick={clickFunc} >{buttonText}</button>
	)
}

Button.propTypes = {
	className: PropTypes.string,
	buttonText: PropTypes.string,
	clickFunc: PropTypes.func,
}

export default Button;