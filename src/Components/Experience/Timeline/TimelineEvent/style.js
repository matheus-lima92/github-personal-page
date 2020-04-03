import styled from 'styled-components';
import colors from 'common/colors';
import definitions from 'common/definitions';

export const TimelineEventStyled = styled.div`
    position: relative;
    .timeline-event {
        width: ${definitions.TIMELINE_EVENT_WIDTH}px;
        height: 200px;
        position: relative;
        cursor: pointer;
        transition: 0.3s;
        background-color: white;
        z-index: 3;
        border-radius: 15px;
        box-shadow: 0 4px 8px 0 black;
    }
    .timeline-event:hover {
        box-shadow: 0 8px 16px 0 black;
    }
    .right-event {
        left: calc(100% - ${definitions.TIMELINE_EVENT_WIDTH}px);
    }
    .left-horizontal-line {
        position: absolute;
        background-color: ${colors.borders};
        height: 3px;
        width: calc(50% - ${definitions.TIMELINE_EVENT_WIDTH}px);
        top: 50px;
        left: ${definitions.TIMELINE_EVENT_WIDTH}px;
    }
    .left-horizontal-line-animated {
        position: absolute;
        background-color: white;
        height: 3px;
        top: 50px;
        z-index: 2;
        left: ${definitions.TIMELINE_EVENT_WIDTH}px;
    }
    .right-horizontal-line {
        position: absolute;
        background-color: ${colors.borders};
        height: 3px;
        width: calc(50% - ${definitions.TIMELINE_EVENT_WIDTH}px);
        top: 50px;
        left: 50%;
    }
    .right-horizontal-line-animated {
        position: absolute;
        background-color: white;
        height: 3px;
        top: 50px;
        z-index: 2;
        right: ${definitions.TIMELINE_EVENT_WIDTH}px;
    }
    .vertical-line {
        position: absolute;
        background-color: ${colors.borders};
        height: 202px;
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