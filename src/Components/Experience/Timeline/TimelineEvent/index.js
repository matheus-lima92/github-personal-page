import React from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TimelineEventStyled } from './style';
import definitions from 'common/definitions';
import colors from 'common/colors';
import { showJobModal } from 'actions/jobModal';

const defineFinalWidth = (parentElement) => {
    if (!parentElement || !parentElement.clientWidth) return 600;
    const sizeToSubtract = window.innerWidth >= definitions.SMALL_DEVICES_MIN_WIDTH
        ? definitions.TIMELINE_EVENT_WIDTH
        : definitions.TIMELINE_EVENT_SIZE_MOBILE;
    return (parentElement.clientWidth / 2) - sizeToSubtract;
};

const defineExhibitionMode = () =>
    window.innerWidth >= definitions.SMALL_DEVICES_MIN_WIDTH ? 'desktop' : 'mobile';

class TimelineEvent extends React.Component {
    constructor(props) {
        super(props);
        this.parentElement = React.createRef();
        this.horizontalLine = React.createRef();
        this.topVerticalLine = React.createRef();
        this.bottomVerticalLine = React.createRef();
        this.topCircle = React.createRef();
        this.bottomCircle = React.createRef();
        this.setGsapTimeline = this.setGsapTimeline.bind(this);
        this.windowResized = this.windowResized.bind(this);
        this.toggleExhibition = this.toggleExhibition.bind(this);
        this.state = { exhibitionMode: defineExhibitionMode() };
    }

    componentDidMount() {
        this.setGsapTimeline();
        window.addEventListener('resize', this.windowResized);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.windowResized);
    }

    windowResized() {
        this.toggleExhibition();
        this.setGsapTimeline();
    }

    toggleExhibition() {
        const { exhibitionMode } = this.state;
        if (exhibitionMode === 'desktop' && window.innerWidth >= definitions.SMALL_DEVICES_MIN_WIDTH) {
            return;
        }
        if (exhibitionMode === 'mobile' && window.innerWidth < definitions.SMALL_DEVICES_MIN_WIDTH) {
            return;
        }
        if (exhibitionMode === 'desktop') {
            this.setState(() => ({ exhibitionMode: 'mobile' }));
            return;
        }
        this.setState(() => ({ exhibitionMode: 'desktop' }));
        return;
    }

    setGsapTimeline() {
        const {
            distanceToTopDesktop,
            distanceToTopMobile,
            distanceToBottomDesktop,
            distanceToBottomMobile,
            orientation
        } = this.props;
        const { exhibitionMode } = this.state;
        const distanceToTop = exhibitionMode === 'desktop' ? distanceToTopDesktop : distanceToTopMobile;
        const distanceToBottom = exhibitionMode === 'desktop' ? distanceToBottomDesktop : distanceToBottomMobile;
        this.tl = gsap.timeline({ paused: true });
        const finalWidth = orientation === 'left'
            ? defineFinalWidth(this.parentElement)
            : defineFinalWidth(this.parentElement) - 1;
        this.tl.fromTo(this.horizontalLine, 0.5, { width: '0px' }, { width: `${finalWidth}px` }, 0);
        this.tl.fromTo(this.topVerticalLine, 0.3, { height: '0px' }, { height: `${distanceToTop}px` }, 0.5);
        this.tl.fromTo(this.bottomVerticalLine, 0.3, { height: '0px' }, { height: `${distanceToBottom}px` }, 0.5);
        this.tl.fromTo(this.topCircle, 0.5, { strokeDashoffset: '400' }, { strokeDashoffset: '0' }, 0.8);
        this.tl.fromTo(this.bottomCircle, 0.5, { strokeDashoffset: '400' }, { strokeDashoffset: '0' }, 0.8);
    }

    render() {

        const {
            orientation,
            company,
            jobStartDate,
            jobEndDate,
            distanceToBottomDesktop,
            distanceToBottomMobile,
            distanceToTopDesktop,
            distanceToTopMobile,
            showJobModal,
        } = this.props;
        const { exhibitionMode } = this.state;
        const distanceToTop = exhibitionMode === 'desktop' ? distanceToTopDesktop : distanceToTopMobile;
        const distanceToBottom = exhibitionMode === 'desktop' ? distanceToBottomDesktop : distanceToBottomMobile;

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
                        this.tl.play();
                    }}
                    onMouseLeave={() => {
                        this.tl.reverse();
                    }}
                    onClick={() => showJobModal(company)}
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
                            stroke={colors.themeColor1}
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
                            stroke={colors.themeColor1}
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
    distanceToTopDesktop: PropTypes.number.isRequired,
    distanceToTopMobile: PropTypes.number.isRequired,
    distanceToBottomDesktop: PropTypes.number.isRequired,
    distanceToBottomMobile: PropTypes.number.isRequired,
    orientation: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    jobStartDate: PropTypes.string.isRequired,
    jobEndDate: PropTypes.string.isRequired,
    showJobModal: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({
	showJobModal,
}, dispatch);

export default connect(null, mapDispatchToProps)(TimelineEvent);
