import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStytled } from './styles';

const Button = ({ label, onClick, width = 120 }) => (
	<ButtonStytled onClick={onClick} width={width}>
		{label}
	</ButtonStytled>
);

Button.propType = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	width: PropTypes.number
};

export default Button;
