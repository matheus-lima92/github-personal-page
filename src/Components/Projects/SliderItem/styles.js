import styled from 'styled-components';

import colors from 'common/colors';
import definitions from 'common/definitions';
import projectLogo from 'common/projectLogo';

export const ItemWrapper = styled.div`
    width: 90%;
    position: relative;
    left: 10px;
    margin-right: 30px;
`;

export const Item = styled.div`
    width: 90%;
    height: 250px;
    margin: auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 black;
    cursor: pointer;
    @media (max-width: ${definitions.SMALL_DEVICES_MIN_WIDTH - 1}px) {
        height: 150px;
    }
`;

export const ItemPictureWrapper = styled.div`
    width: 90%;
    height: 130px;
    border-bottom: 1px solid ${colors.tinyBorders};
    margin: auto;
    position: relative;
    top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: ${definitions.SMALL_DEVICES_MIN_WIDTH - 1}px) {
        top: 10px;
        border: none;
    }
`;

export const ItemPicture = styled.div`
    height: 100px;
    width: 140px;
    border-radius: 10px;
    background: ${props => `url(${projectLogo(props.project)}) no-repeat center`};
    background-size: cover;
`;

export const ItemDescription = styled.div`
    border-radius: 5px;
    width: 90%;
    min-height: 20px;
    margin: auto;
    margin-top: 45px;
    font-size: 16px;
    @media (max-width: ${definitions.SMALL_DEVICES_MIN_WIDTH - 1}px) {
        display: none;
    }
`;