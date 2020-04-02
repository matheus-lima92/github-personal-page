import React from 'react';

import TimelineEvent from './TimelineEvent';
import { TimelineStyled, YearMark } from './style';

class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horizontalLineAnimated: false,
            topVerticalLineAnimated: false,
            bottomVerticalLineAnimated: false,
        };
    }


    render() {
        return (
            <TimelineStyled>
                <YearMark>
                    <span>2020</span>
                </YearMark>
                <TimelineEvent distanceToTop={50} distanceToBottom={153} orientation="left" />
                <TimelineEvent distanceToTop={150} distanceToBottom={50} orientation="right" />
                <YearMark>
                    <span>2019</span>
                </YearMark>
            </TimelineStyled>
        )
    }
}

export default Timeline;
