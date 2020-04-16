import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import gsap from 'gsap';

import { hideJobModal } from 'actions/jobModal';
import { Modal, ModalBox, ModalHeader, CompanyLogo, CompanyInformation } from './styles';

class JobModal extends React.Component {

    constructor(props) {
        super(props);
        this.modal = React.createRef();
        this.modalBox = React.createRef();
    }

    componentDidMount() {
        gsap.set(this.modalBox, { scale: 0 });
    }

    componentDidUpdate(prevProps) {
        const { jobModal } = this.props;
        console.log(prevProps);
        console.log(jobModal);
        if (jobModal && !prevProps.jobModal) {
            gsap.to(this.modal, 0.3, { autoAlpha: 1 });
            gsap.to(this.modalBox, 0.4, { scale: 1, delay: 0.3, ease: 'elastic.out(1, 0.7)' })
        }
        if (!jobModal && prevProps.jobModal) {
            gsap.to(this.modalBox, 0.4, { scale: 0, ease: 'elastic.in(1, 0.7)' });
            gsap.to(this.modal, 0.15, { autoAlpha: 0, delay: 0.4 });
        }
    }

    render() {
        const { hideJobModal } = this.props;
        return (
            <Modal ref={(elem) => { this.modal = elem; }}
                // open={!!jobModal}
                // style={{ height: '300px', width: '90%', position: 'relative', top: '-20vh', margin: 'auto', maxWidth: '400px' }}
                // closeIcon
                // onClose={() => hideJobModal()}
            >
                    {/* <CompanyLogo company={jobModal} />
                    <CompanyInformation>
                        <div>
                            <b>Empresa: </b>
                            <span>{jobModal}</span>
                        </div>
                    </CompanyInformation>  */}
                <ModalBox ref={(elem) => { this.modalBox = elem; }}>
                    <ModalHeader>
                        <div onClick={() => hideJobModal()}>&times;</div>
                    </ModalHeader>
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
