import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Trans, withTranslation } from 'react-i18next';
import gsap from 'gsap';

import i18n from 'i18n';
import { hideProjectModal } from 'actions/projectModal';
import {
    Modal,
    ModalBox,
    ModalHeader,
    ProjectLogo,
    ProjectInformation
} from './style';

const getCompanyI18nKey = (prefix, company = '') => {
    if (!company || !prefix) return 'TRANSLATION_NOT_FOUND';
    return `${prefix}_${company.replace(/ +/g, '').toUpperCase()}`;
}

class ProjectModal extends React.Component {

    constructor(props) {
        super(props);
        this.modal = React.createRef();
        this.modalBox = React.createRef();
        this.closeModal = this.closeModal.bind(this);
        this.renderProjectModalDescription = this.renderProjectModalDescription.bind(this);
    }

    componentDidMount() {
        gsap.set(this.modalBox, { scale: 0 });
    }

    componentDidUpdate(prevProps) {
        const { projectModal } = this.props;
        if (projectModal && !prevProps.projectModal) {
            gsap.to(this.modal, 0.3, { autoAlpha: 1 });
            gsap.to(this.modalBox, 0.4, { scale: 1, delay: 0.3, ease: 'elastic.out(1, 0.7)' });
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal() {
        const { hideProjectModal } = this.props;
        gsap.to(this.modalBox, 0.4, { scale: 0, ease: 'elastic.in(1, 0.7)' });
        gsap.to(this.modal, 0.15, { autoAlpha: 0, delay: 0.4 });
        setTimeout(() => {
            document.body.style.overflow = 'auto';
            hideProjectModal();
        }, 500);
    }

    renderProjectModalDescription(){
        const { projectModal: project } = this.props;
        const currentLanguage = i18n.language;
        return null;
    }

    render() {
        const { projectModal: project, t } = this.props;
        return (
            <Modal ref={(elem) => { this.modal = elem; }}>
                <ModalBox ref={(elem) => { this.modalBox = elem; }}>
                    <ModalHeader>
                        <div onClick={() => this.closeModal()}>&times;</div>
                    </ModalHeader>
                    <ProjectLogo project={project} />
                    <ProjectInformation>
                        
                    </ProjectInformation>
                </ModalBox>
            </Modal>
        )
    }
};


ProjectModal.propType = {
    hideProjectModal: PropTypes.func.isRequired,
    projectModal: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    projectModal: state.projectModal,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	hideProjectModal,
}, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ProjectModal));
