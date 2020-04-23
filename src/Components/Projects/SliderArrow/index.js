import React from 'react';
import PropTypes from 'prop-types';

import { SliderLeftArrow, SliderRightArrow } from './styles';

const SliderArrow = ({ onClick, direction }) => {
	if (direction === 'left') return (
		<SliderLeftArrow onClick={onClick}>
			<div className="icon-container">
				<i className={`fa fa-chevron-left`} />
			</div>
		</SliderLeftArrow>
	);
	return (<SliderRightArrow onClick={onClick}>
		<div className="icon-container">
			<i className={`fa fa-chevron-right`} />
		</div>
	</SliderRightArrow>);
};

SliderArrow.propType = {
	onClick: PropTypes.func.isRequired,
	direction: PropTypes.string.isRequired
};

export default SliderArrow;