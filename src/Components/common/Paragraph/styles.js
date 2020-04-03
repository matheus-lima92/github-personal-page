import styled from 'styled-components';
import colors from 'common/colors';
import definitions from 'common/definitions';

export const ParagraphStyled = styled.div`
	margin: auto;
	margin-top: ${props => (props.firstParagraph ? '0px' : '25px')};
	margin-bottom: ${props => (props.lastParagraph ? '100px' : '0px')};
	width: 80%;
	max-width: ${definitions.MAIN_SECTION_MAX_WIDTH}px;
	color: ${colors.paragraphText};
	text-align: justify;
	font-size: 18px;
`;