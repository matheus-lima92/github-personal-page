import styled, { keyframes } from 'styled-components';

const scaleFrom0 = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

export const ContentSection = styled.div`
    animation: 0.5s ${scaleFrom0} ease-out;
`;
