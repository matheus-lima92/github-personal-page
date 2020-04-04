import React from 'react';

import TimelineEvent from './TimelineEvent';
import { TimelineStyled, YearMark } from './style';

class Timeline extends React.Component {

    render() {
        return (
            <TimelineStyled>
                <YearMark>
                    <span>2020</span>
                </YearMark>
                <TimelineEvent distanceToTop={50} distanceToBottom={151} orientation="left" />
                <YearMark>
                    <span>2019</span>
                </YearMark>
                <TimelineEvent distanceToTop={50} distanceToBottom={351} orientation="right" />
                <TimelineEvent distanceToTop={251} distanceToBottom={151} orientation="left" />
                <YearMark>
                    <span>2018</span>
                </YearMark>
                <TimelineEvent distanceToTop={50} distanceToBottom={151} orientation="right" />
                <YearMark>
                    <span>2016</span>
                </YearMark>
                <TimelineEvent distanceToTop={50} distanceToBottom={151} orientation="left" />
                <YearMark>
                    <span>2015</span>
                </YearMark>
                <TimelineEvent distanceToTop={50} distanceToBottom={151} orientation="right" />
                <YearMark>
                    <span>2014</span>
                </YearMark>
                <TimelineEvent distanceToTop={50} distanceToBottom={151} orientation="left" />
                <YearMark>
                    <span>2012</span>
                </YearMark>
            </TimelineStyled>
        )
    }
}

export default Timeline;
