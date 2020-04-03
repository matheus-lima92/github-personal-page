import styled from 'styled-components';

import colors from 'common/colors';
import definitions from 'common/definitions';

export const TitleStyled = styled.div`
	margin: auto;
	width: 80%;
	max-width: ${definitions.MAIN_SECTION_MAX_WIDTH}px;
	color: ${colors.paragraphText};
	text-align: justify;
	font-size: 35px;
	font-weight: 800;
	height: 150px;
	display: flex;
	align-items: center;
`;