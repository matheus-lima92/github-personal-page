import styled, { keyframes } from 'styled-components';

import definitions from 'common/definitions';

const scaleFrom0 = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

export const ContentSection = styled.div`
    @media (min-width: ${definitions.DESKTOP_MIN_WIDTH}px) {
        animation: 0.5s ${scaleFrom0} ease-out;
    }

    @media (max-width: ${definitions.DESKTOP_MIN_WIDTH - 1}px) {
        animation: 0.5s ${scaleFrom0} ease-out;
    }
`;
