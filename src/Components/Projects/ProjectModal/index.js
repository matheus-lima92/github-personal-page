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
        const { projectModal: project, showFullScreenMedia, t } = this.props;
        const currentLanguage = i18n.language;
        const drozURL = currentLanguage === 'pt' ? 'https://meudroz.com.br/' : 'https://meudroz.com.br/en/'
        if (project === '99 Leads') return (
            <Trans i18nKey="PROJECT_MODAL_NLEADS">
                99 Leads is a tool that aims to reduce the cost and increase the efficiency of the
                lead generation process (potential customers) for real estate agents. The application counts
                with very interesting features, such as generating a Facebook campaign through an interface
                intuitive and friendly, as well as automatic email triggering and activity management.
        		<ProjectMedia
                    src="nleads_pic_1"
                    description={t('PROJECT_MODAL_NLEADS_MEDIA_SUBTITLE_1')}
                    onClick={() => showFullScreenMedia('nleads_pic_1')}
                />
        		The development was done in Vue.js, using <a href="https://vuetifyjs.com/en" target="_blank" rel="noopener noreferrer">Vuetify</a>
                for the design of the components.
            </Trans>
        );
        if (project === 'Tronwallet') return (
            <Trans i18nKey="PROJECT_MODAL_TRONWALLET">
                Tronwallet is a crypto wallet for cryptocurrency exchange and transactions. It is
                a mobile app built with React Native, which connects to a blockchain API.
                It has very interesting and innovative features, such as enabling the transfer of
                cryptocurrencies through a QR code. Click <a href="https://www.youtube.com/watch?v=R-5vSKH0B3g" target="_blank" rel="noopener noreferrer">here</a>
                to see a demonstration of Tronwallet.
                <ProjectMedia
                    src="tronwallet_media_1"
                    description={t('PROJECT_MODAL_TRONWALLET_MEDIA_SUBTITLE_1')}
                    height={200}
                    onClick={() => showFullScreenMedia('tronwallet_media_1')}
                />
                I had the opportunity to develop some Tronwallet's features in the period I worked
                at <a href="https://getty.io/" target="_blank" rel="noopener noreferrer">Getty</a>.
                Since then many new features have been added, if you operate with cryptocurrencies it is worth taking a look!
            </Trans>
        )

        if (project === 'Droz') return (
            <Trans i18nKey="PROJECT_MODAL_DROZ">
                <a href={drozURL} target="_blank" rel="noopener noreferrer">Droz</a> is a hybrid chatbot platform based
                on decision tree and natural language processing. It is able to retain customer service and save the need for
                human attendants, enriching the customer experience. The tool has an administrator panel where it is possible 
                to generate reports and graphs of the services performed. I had the opportunity to develop some of Droz's features 
                during the period I worked at <a href='https://www.aktienow.com/' target="_blank" rel="noopener noreferrer">Aktienow</a>.
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
