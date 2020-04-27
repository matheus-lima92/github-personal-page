import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import gsap from 'gsap';

import projectMedia from 'common/projectMedia';
import { hideFullScreenMedia } from 'actions/fullScreenMedia';
import { FullScreenMediaWrapper, ResponsiveMedia, CloseButton } from './style';

class FullScreenMedia extends React.Component {

    constructor(props) {
        super(props);
        this.mediaWrapper = React.createRef();
        this.media = React.createRef();
        this.closeMedia = this.closeMedia.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        gsap.set(this.modalBox, { scale: 0 });
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    componentDidUpdate(prevProps) {
        const { mediaSrc } = this.props;
        if (mediaSrc && !prevProps.mediaSrc) {
            gsap.to(this.mediaWrapper, 0.3, { autoAlpha: 1 });
            document.body.style.overflow = 'hidden';
        }
    }

    closeMedia() {
        const { hideFullScreenMedia } = this.props;
        gsap.to(this.mediaWrapper, 0.15, { autoAlpha: 0 });
        setTimeout(() => {
            document.body.style.overflow = 'auto';
            hideFullScreenMedia();
        }, 150);
    }

    handleClickOutside(event) {
        const { mediaSrc } = this.props;
        if (!mediaSrc) return;
        if (this.media && !this.media.contains(event.target)) {
            this.closeMedia();
        }
    }

    handleKeyDown(event) {
        const { mediaSrc } = this.props;
        if (!mediaSrc) return;
        if(event.keyCode === 27) {
            this.closeMedia();
        }
    }

    render() {
        const { mediaSrc } = this.props;
        return (
            <FullScreenMediaWrapper  ref={(elem) => { this.mediaWrapper = elem; }}>
                <CloseButton onClick={() => this.closeMedia()}>&times;</CloseButton>
                <ResponsiveMedia src={projectMedia(mediaSrc)} ref={(elem) => { this.media = elem; }} />
            </FullScreenMediaWrapper>
        );
    }
};


FullScreenMedia.propType = {
    hideFullScreenMedia: PropTypes.func.isRequired,
    mediaSrc: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    mediaSrc: state.fullScreenMedia,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	hideFullScreenMedia,
}, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(FullScreenMedia);