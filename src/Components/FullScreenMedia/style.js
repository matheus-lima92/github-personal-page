import styled from 'styled-components';

import colors from 'common/colors';

export const FullScreenMediaWrapper = styled.div`
    align-items: center;
    background-color: rgba(0,0,0,0.9);
    display: flex;
    height: 100vh;
    justify-content: center;
    position: fixed;
    width: 100vw;
    z-index: 25;
    visibility: hidden;
    opacity: 0;
`;

export const ResponsiveMedia = styled.img`
    max-width: 100%;
`;

export const CloseButton = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-color: white;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 10px;
    top: 10px;
    color: ${colors.themeColor1};
    font-size: 20px;
    font-weight: 800;
    cursor: pointer;
`;