import React from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

import { TimelineEventStyled } from './style'
import definitions from 'common/definitions'

class TimelineEvent extends React.Component {
    constructor(props) {
        super(props);
        this.horizontalLine = React.createRef();
        this.topVerticalLine = React.createRef();
        this.bottomVerticalLine = React.createRef();
        this.parentElement = React.createRef();
        this.updateDimensions = this.updateDimensions.bind(this);
        this.setGsapTimeline = this.setGsapTimeline.bind(this);
    }

    componentDidMount() {  
        this.setGsapTimeline();
        window.addEventListener('resize', this.updateDimensions);
    }

    setGsapTimeline() {
        const { distanceToTop, distanceToBottom } = this.props;
        this.tl = gsap.timeline({ paused: true });
        const finalWidth = ((this.parentElement ? this.parentElement.clientWidth/2 : 600) - (definitions.TIMELINE_EVENT_WIDTH + 1));
        this.tl.fromTo(this.horizontalLine, 0.5, { width: '0px' }, { width: `${finalWidth}px` }, 0);
        this.tl.fromTo(this.topVerticalLine, 0.3, { height: '0px' }, { height: `${distanceToTop}px` }, 0.5);
        this.tl.fromTo(this.bottomVerticalLine, 0.3, { height: '0px' }, { height: `${distanceToBottom}px` }, 0.5);
    }


    updateDimensions() {
        this.setGsapTimeline();
    }

    render() {

        const { orientation, company, jobStartDate, jobEndDate } = this.props;

        return (
            <TimelineEventStyled
                ref={(elem) => { this.parentElement = elem; }}
                company={company}
            >
                <div
                    className={`timeline-event ${orientation}-event`}
                    onMouseEnter={() => {
                        this.tl.play();
                    }}
                    onMouseLeave={() => {
                        this.tl.reverse();
                    }}
                >
                    <div className="company-logo" />
                    <div className="working-period">
                        <div className="job-position">
                            <span>
                                <b>{company}</b>
                            </span>
                        </div>
                        <div className="job-period">
                            <span>{`${jobStartDate} - ${jobEndDate}`}</span>
                        </div>
                    </div>
                </div>
                <div className="vertical-line" />
                <div className={`${orientation}-horizontal-line`} />
                <div ref={(elem) => { this.horizontalLine = elem; }} className={`${orientation}-horizontal-line-animated`} />
                <div ref={(elem) => { this.topVerticalLine = elem; }} className="top-vertical-line-animated" />
                <div ref={(elem) => { this.bottomVerticalLine = elem; }} className="bottom-vertical-line-animated" />
            </TimelineEventStyled>
        )
    }
}

TimelineEvent.propType = {
    distanceToTop: PropTypes.number.isRequired,
    distanceToBottom: PropTypes.number.isRequired,
    orientation: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    jobStartDate: PropTypes.string.isRequired,
    jobEndDate: PropTypes.string.isRequired,
};


export default TimelineEvent;