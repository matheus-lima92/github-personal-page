import styled from 'styled-components';

import colors from 'common/colors';
import definitions from 'common/definitions';

export const TimelineStyled = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 30px;
`;

export const YearMark = styled.div`
    border: 2px solid ${colors.borders};
    border-radius: 100%;
    width: 100px;
    height: 100px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    background-color: black;
    color: white;
`;

export const TimelineEvent = styled.div`
    position: relative;
    .left-event {
        border: 1px solid yellow;
        border-radius: 100%;
        width: 100px;
        height: 100px;
        position: relative;
        cursor: pointer;
    }
    .right-event {
        border: 1px solid yellow;
        border-radius: 100%;
        width: 100px;
        height: 100px;
        position: relative;
        left: calc(100% - 100px);
        cursor: pointer;
    }
    .left-horizontal-line {
        position: absolute;
        background-color: ${colors.borders};
        height: 3px;
        width: calc(50% - 100px);
        top: 50px;
        left: 100px;
    }
    .right-horizontal-line {
        position: absolute;
        background-color: ${colors.borders};
        height: 3px;
        width: calc(50% - 100px);
        top: 50px;
        left: 50%;
    }
    .vertical-line {
        position: absolute;
        background-color: ${colors.borders};
        height: 102px;
        width: 3px;
        top: 0px;
        left: 50%;
    }
`