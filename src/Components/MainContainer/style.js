import styled from 'styled-components';

import definitions from 'common/definitions';

export const MainContainerStyled = styled.div`

	@media (min-width: ${definitions.DESKTOP_MIN_WIDTH}px) {
    	width: calc(100% - 350px);
		margin-left: 350px;
	}
	
  	@media (max-width: ${definitions.DESKTOP_MIN_WIDTH - 1}px) {
		width: 100%;
	}
`