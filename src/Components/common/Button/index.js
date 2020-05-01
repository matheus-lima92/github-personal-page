import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStytled } from './styles';

const Button = ({ label, onClick }) => (
	<ButtonStytled onClick={onClick}>
		{label}
	</ButtonStytled>
);

Button.propType = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default Button;
