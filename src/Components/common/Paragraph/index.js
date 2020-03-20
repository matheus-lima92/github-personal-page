import React from 'react';
import PropTypes from 'prop-types';

import { ParagraphStyled } from './styles';

const Paragraph = (props) => (
	<ParagraphStyled firstParagraph={props.firstParagraph} lastParagraph={props.lastParagraph}>
		{props.children}
	</ParagraphStyled>
);

Paragraph.propTypes = {
	firstParagraph: PropTypes.bool,
	lastParagraph: PropTypes.bool
};

export default Paragraph;
