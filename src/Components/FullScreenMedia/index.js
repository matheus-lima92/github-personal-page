import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import gsap from 'gsap';

import projectMedia from 'common/projectMedia';
import { hideFullScreenMedia } from 'actions/fullScreenMedia';
import { FullScreenMediaWrapper, ResponsiveImage, CloseButton } from './style';

class FullScreenMedia extends React.Component {

    constructor(props) {
        super(props);
        this.mediaWrapper = React.createRef();
        this.closeMedia = this.closeMedia.bind(this);
    }

    componentDidMount() {
        gsap.set(this.modalBox, { scale: 0 });
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

    render() {
        const { mediaSrc } = this.props;
        return (
            <FullScreenMediaWrapper  ref={(elem) => { this.mediaWrapper = elem; }}>
                <CloseButton onClick={() => this.closeMedia()}>&times;</CloseButton>
                <ResponsiveImage src={projectMedia(mediaSrc)} />
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