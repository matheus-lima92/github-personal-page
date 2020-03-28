import styled, { keyframes } from 'styled-components';

import definitions from 'common/definitions';

const slideInFromTop = keyframes`
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(0);
    }
`;

const slideInFromLeft = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`;

export const AboutStyled = styled.div`
    @media (min-width: ${definitions.DESKTOP_MIN_WIDTH}px) {
        animation: 0.7s ${slideInFromTop} ease-out;
    }

    @media (max-width: ${definitions.DESKTOP_MIN_WIDTH - 1}px) {
        animation: 0.7s ${slideInFromLeft} ease-out;
    }
`;
