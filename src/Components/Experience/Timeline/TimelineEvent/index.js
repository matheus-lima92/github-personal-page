import React from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

import { TimelineEventStyled } from './style'

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
        this.tl = gsap.timeline({ paused: true });
        this.tl.set(this.horizontalLine, {
            position: 'absolute',
            backgroundColor: 'white',
            height: '3px',
            top: '50px',
            zIndex: '2',
            left: '100px'
        });
        const finalWidth = (this.parentElement.clientWidth/2 - 97)
        this.tl.fromTo(this.horizontalLine, 1, { width: '0px' }, { width: `${finalWidth}px` });
    }


    updateDimensions() {
        this.setGsapTimeline();
    }

    render() {

        const { distanceToTop, distanceToBottom } = this.props;

        return (
            <TimelineEventStyled
                distanceToBottom={distanceToBottom}
                distanceToTop={distanceToTop}
                ref={(elem) => { this.parentElement = elem; }}
            >
                <div
                    className="left-event"
                    onMouseEnter={() => {
                        this.tl.play();
                    }}
                    onMouseLeave={() => {
                        this.tl.reverse();
                    }}
                >
                </div>
                <div className="vertical-line" />
                <div className="left-horizontal-line" />
                <div ref={(elem) => { this.horizontalLine = elem; }} className="left-horizontal-line-animated" />
                <div ref={(elem) => { this.topVerticalLine = elem; }} className="top-vertical-line-animated" />
                <div ref={(elem) => { this.bottomVerticalLine = elem; }} className="bottom-vertical-line-animated" />
            </TimelineEventStyled>
        )
    }
}

TimelineEvent.propType = {
    distanceToTop: PropTypes.number.isRequired,
    distanceToBottom: PropTypes.number.isRequired
};


export default TimelineEvent;