import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Trans, withTranslation } from 'react-i18next';
import gsap from 'gsap';

import i18n from 'i18n';
import { hideProjectModal } from 'actions/projectModal';
import { showFullScreenMedia } from 'actions/fullScreenMedia';
import ProjectMedia from './ProjectMedia';
import {
    Modal,
    ModalBox,
    ModalHeader,
    ProjectLogo,
    ProjectInformation,
} from './style';

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
        const { projectModal: project, showFullScreenMedia } = this.props;
        const currentLanguage = i18n.language;
        if (project === '99 Leads') return (
            <Trans i18nKey="PROJECT_MODAL_NLEADS">
                99 Leads is a tool that aims to reduce the cost and increase the efficiency of the
                lead generation process (potential customers) for real estate agents. The application counts
                with very interesting features, such as generating a Facebook campaign through an interface
                intuitive and friendly, as well as automatic email triggering and activity management.
        		<ProjectMedia src="nleads_pic_1" description="teste" onClick={() => showFullScreenMedia('nleads_pic_1')}/>
        		The development was done in Vue.js, using <a href="https://vuetifyjs.com/en" target="_blank" rel="noopener noreferrer">Vuetify</a>
                for the design of the components.
            </Trans>
        )
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
                        {this.renderProjectModalDescription()}
                    </ProjectInformation>
                </ModalBox>
            </Modal>
        )
    }
};


ProjectModal.propType = {
    hideProjectModal: PropTypes.func.isRequired,
    showFullScreenMedia: PropTypes.func.isRequired,
    projectModal: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    projectModal: state.projectModal,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    hideProjectModal,
    showFullScreenMedia,
}, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(ProjectModal));
