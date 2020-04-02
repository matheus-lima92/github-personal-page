import styled from 'styled-components';
import colors from 'common/colors';

export const TimelineEventStyled = styled.div`
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
    .left-horizontal-line-animated {
        position: absolute;
        background-color: white;
        height: 3px;
        top: 50px;
        z-index: 2;
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
    .right-horizontal-line-animated {
        position: absolute;
        background-color: white;
        height: 3px;
        top: 50px;
        z-index: 2;
        right: 100px;
    }
    .vertical-line {
        position: absolute;
        background-color: ${colors.borders};
        height: 102px;
        width: 3px;
        top: 0px;
        left: 50%;
    }
    .top-vertical-line-animated {
        transform: rotatex(180deg);
        transform-origin: top;
        position: absolute;
        background-color: white;
        width: 3px;
        top: 50px;
        left: 50%;
        z-index: 2;
    }
    .bottom-vertical-line-animated {
        position: absolute;
        background-color: white;
        width: 3px;
        top: 50px;
        left: 50%;
        z-index: 2;
    }
`