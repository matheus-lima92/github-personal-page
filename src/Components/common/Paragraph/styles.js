import styled from 'styled-components';

import colors from 'common/colors';

export const ParagraphStyled = styled.div`
	margin: auto;
	margin-top: ${props => (props.firstParagraph ? '0px' : '25px')};
	margin-bottom: ${props => (props.lastParagraph ? '100px' : '0px')};
	width: 80%;
	max-width: 900px;
	color: ${colors.paragraphText};
	text-align: justify;
	font-size: 18px;
`;