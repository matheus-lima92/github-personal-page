import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import gsap from 'gsap';

import { hideJobModal } from 'actions/jobModal';
import {
    Modal,
    ModalBox,
    ModalHeader,
    CompanyLogo,
    CompanyInformation
} from './styles';

class JobModal extends React.Component {

    constructor(props) {
        super(props);
        this.modal = React.createRef();
        this.modalBox = React.createRef();
        this.closeModal = this.closeModal.bind(this); 
    }

    componentDidMount() {
        gsap.set(this.modalBox, { scale: 0 });
    }

    componentDidUpdate(prevProps) {
        const { jobModal } = this.props;
        if (jobModal && !prevProps.jobModal) {
            gsap.to(this.modal, 0.3, { autoAlpha: 1 });
            gsap.to(this.modalBox, 0.4, { scale: 1, delay: 0.3, ease: 'elastic.out(1, 0.7)' });
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal() {
        const { hideJobModal } = this.props;
        gsap.to(this.modalBox, 0.4, { scale: 0, ease: 'elastic.in(1, 0.7)' });
        gsap.to(this.modal, 0.15, { autoAlpha: 0, delay: 0.4 });
        setTimeout(() => {
            document.body.style.overflow = 'auto';
            hideJobModal();
        }, 500);
    }

    render() {
        const { jobModal } = this.props;
        return (
            <Modal ref={(elem) => { this.modal = elem; }}>
                <ModalBox ref={(elem) => { this.modalBox = elem; }}>
                    <ModalHeader>
                        <div onClick={() => this.closeModal()}>&times;</div>
                    </ModalHeader>
                    <CompanyLogo company={jobModal} />
                    <CompanyInformation>
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                        lorem ipsum dolor sit amet
                    </CompanyInformation>
                </ModalBox>
            </Modal>
        )
    }
};


JobModal.propType = {
    hideJobModal: PropTypes.func.isRequired,
    jobModal: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    jobModal: state.jobModal,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	hideJobModal,
}, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(JobModal);
