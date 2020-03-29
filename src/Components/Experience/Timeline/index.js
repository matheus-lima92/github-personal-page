import React from 'react';

import { TimelineStyled, TimelineEvent, YearMark } from './style'

const Timeline = () => (
    <TimelineStyled>
        <YearMark>
            <span>2020</span>
        </YearMark>
        <TimelineEvent>
            <div className="left-event">
            </div>
            <div className="vertical-line" />
            <div className="left-horizontal-line" />
        </TimelineEvent>
        <TimelineEvent>
            <div className="right-event">
            </div>
            <div className="vertical-line" />
            <div className="right-horizontal-line" />
        </TimelineEvent>
        <YearMark>
            <span>2019</span>
        </YearMark>
    </TimelineStyled>
);

export default Timeline;
