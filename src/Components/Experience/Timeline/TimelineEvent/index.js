import React from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

import { TimelineEventStyled } from './style';
import definitions from 'common/definitions';
import colors from 'common/colors';

class TimelineEvent extends React.Component {
    constructor(props) {
        super(props);
        this.parentElement = React.createRef();
        this.horizontalLine = React.createRef();
        this.topVerticalLine = React.createRef();
        this.bottomVerticalLine = React.createRef();
        this.topCircle = React.createRef();
        this.bottomCircle = React.createRef();
        this.updateDimensions = this.updateDimensions.bind(this);
        this.setGsapTimeline = this.setGsapTimeline.bind(this);
    }

    componentDidMount() {  
        this.setGsapTimeline();
        window.addEventListener('resize', this.updateDimensions);
    }

    setGsapTimeline() {
        const { distanceToTop, distanceToBottom, isFirstEvent } = this.props;
        this.tl = gsap.timeline({ paused: true });
        const finalWidth = ((this.parentElement ? this.parentElement.clientWidth/2 : 600) - (definitions.TIMELINE_EVENT_WIDTH));
        this.tl.fromTo(this.horizontalLine, 0.5, { width: '0px' }, { width: `${finalWidth}px` }, 0);
        this.tl.fromTo(this.topVerticalLine, 0.3, { height: '0px' }, { height: `${distanceToTop}px` }, 0.5);
        this.tl.fromTo(this.bottomVerticalLine, 0.3, { height: '0px' }, { height: `${distanceToBottom}px` }, 0.5);
        this.tl.fromTo(this.topCircle, 0.5, { strokeDashoffset: '400' }, { strokeDashoffset: '0' }, 0.8);
        this.tl.fromTo(this.bottomCircle, 0.5, { strokeDashoffset: '400' }, { strokeDashoffset: '0' }, 0.8);
    }


    updateDimensions() {
        this.setGsapTimeline();
    }

    render() {

        const {
            orientation,
            company,
            jobStartDate,
            jobEndDate,
            distanceToBottom,
            distanceToTop
        } = this.props;

        return (
            <TimelineEventStyled
                ref={(elem) => { this.parentElement = elem; }}
                company={company}
                distanceToTop={distanceToTop}
                distanceToBottom={distanceToBottom}
            >
                <div
                    className={`timeline-event ${orientation}-event`}
                    onMouseEnter={() => {
                        console.log(distanceToTop);
                        console.log(distanceToBottom);
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
                <div className="bottom-circle-animated">
                    <svg>
                        <circle
                            ref={(elem) => { this.bottomCircle = elem; }}
                            cx="50"
                            cy="50"
                            r="49"
                            fill="none"
                            stroke={colors.animatedLineColor2}
                            strokeWidth="3"
                            strokeDasharray="400"
                            transform="rotate(-90 50 50)"
                        />
                    </svg>
                </div>
                <div className="top-circle-animated">
                    <svg>
                        <circle
                            ref={(elem) => { this.topCircle = elem; }}
                            cx="50"
                            cy="50"
                            r="49"
                            fill="none"
                            stroke={colors.animatedLineColor2}
                            strokeWidth="3"
                            strokeDasharray="400"
                            transform="rotate(-270 50 50)"
                        />
                    </svg>
                </div>
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