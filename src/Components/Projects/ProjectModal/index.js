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
import Button from 'Components/common/Button';
import {
    Modal,
    ModalBox,
    ModalHeader,
    ProjectLogo,
    ProjectInformation,
    ProjectTitle,
    ActionButton,
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
        const drozURL = currentLanguage === 'pt' ? 'https://meudroz.com.br/' : 'https://meudroz.com.br/en/';
        const pwaURL = currentLanguage === 'pt'
            ? 'https://pt.wikipedia.org/wiki/Progressive_web_app'
            : 'https://en.wikipedia.org/wiki/Progressive_web_application';
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
                to generate reports and graphs of the services performed.
                <ProjectMedia
                    src="droz"
                    description={t('PROJECT_MODAL_DROZ_MEDIA_SUBTITLE_1')}
                    onClick={() => showFullScreenMedia('droz')}
                />
                I developed some of Droz's features during the period I worked 
                at <a href='https://www.aktienow.com/' target="_blank" rel="noopener noreferrer">Aktienow</a>.
            </Trans>
        )

        if (project === 'CST - TOTVS') return (
            <Trans i18nKey="PROJECT_MODAL_TOTVS">
                CST is short for TOTVS Service Center. The company TOTVS has a central implemented in a Zendesk environment,
                where your customers can consult information, generate payment slips and receipts, in addition to several
                other features. I was responsible for implementing an update to the CST layout (that was provided by a designer) together with Aktienow's
                development team, in addition to structuring new integrations with TOTVS' API. At the end of the project,
                <a href='https://www.youtube.com/watch?v=ADaGn9UWx7U' target="_blank" rel="noopener noreferrer">a very cool video </a> 
                was released with the new features.
            </Trans>
        )

        if (project === 'Onfo') return (
            <Trans i18nKey="PROJECT_MODAL_ONFO">
                <a href='https://onfocoin.com/' target="_blank" rel="noopener noreferrer">Onfo</a> is a cryptocurrency designed 
                to facilitate exchange and transaction operations. The Onfo platform consists of basically a 
                <a href={pwaURL} target="_blank" rel="noopener noreferrer">PWA</a> developed in React, integrated 
                with an AWS microservice architecture. I developed some of the features of the application during the period I worked 
                at <a href='https://getty.io/' target="_blank" rel="noopener noreferrer">Getty IO</a>, in particular the registration 
                of users, which has authentication via social networks, and several security verification steps.
                <ProjectMedia
                    src="onfo_screen"
                    description={t('PROJECT_MODAL_ONFO_MEDIA_SUBTITLE_1')}
                    onClick={() => showFullScreenMedia('onfo_screen')}
                />
                Click <a href='https://www.youtube.com/watch?v=F2AkkGbrx2g' target="_blank" rel="noopener noreferrer">here</a> to see 
                Onfo's promotional video.
            </Trans>
        )

        if (project === 'Simon Game') return (
            <Trans i18nKey="PROJECT_MODAL_GENIUS">
                A replica of Simon Game was one of the first cool projects that I did after starting to study HTML, CSS
                and Javascript, using AngularJS as a framework for development. The Project emerged as a challenge proposed by
                <a href='https://www.freecodecamp.org/' target="_blank" rel="noopener noreferrer">freeCodeCamp</a> community.
                <ProjectMedia
                    src="demo_genius"
                    description={t('PROJECT_MODAL_GENIUS_MEDIA_SUBTITLE_1')}
                    onClick={() => showFullScreenMedia('demo_genius')}
                />
                Reviewing the code, today I would do many different things and add some improvements, but I like to keep
                the original version as a record. Click 
                <a href='https://codepen.io/MatheusLima92/full/dpaYyq' target="_blank" rel="noopener noreferrer">here</a> to play.
            </Trans>
        )

        if (project === 'React Shapes') return (
            <Trans i18nKey="PROJECT_MODAL_REACT_SHAPES">
                Could you say how many parallelograms can be formed from 3 random points? Where can the 4th point be positioned 
                to form a quadrilateral with two pairs of parallel sides? To answer the questions, probably you would have to go 
                deep into a few concepts of analytic geometry. Or, if you are not a big fan of Math, you can just play with
                React Shapes! It will do all the dirty job for you! You just need to define 3 points, and React Shapes will automatically 
                define the 4th point and show you all the properties of the quadrilateral.
                <ProjectMedia
                    src="react_shapes"
                    description={t('PROJECT_MODAL_REACT_SHAPES_MEDIA_SUBTITLE_1')}
                    onClick={() => showFullScreenMedia('react_shapes')}
                    height={360}
                />
                React Shapes is an open source project that I created, click 
                <a href='https://github.com/matheus-gomes-dev/react-shapes/' target="_blank" rel="noopener noreferrer">here</a> to see the repository
                on Github.
            </Trans>
        )

        if (project === 'Github Search') return (
            <Trans i18nKey="PROJECT_MODAL_GITHUB_SEARCH">
                Github Search is an open source project made in React, with a simple purpose: interact with Github's API to
                search for users and repositories.
                <ProjectMedia
                    src="github_search"
                    description={t('PROJECT_MODAL_REACT_GITHUB_SEARCH_MEDIA_SUBTITLE_1')}
                    onClick={() => showFullScreenMedia('github_search')}
                />		
                You can check the <a href='http://github-spa-react.s3-website-sa-east-1.amazonaws.com/' target="_blank" rel="noopener noreferrer">application running on AWS</a>, 
                and click <a href='https://github.com/matheus-gomes-dev/github-spa-react' target="_blank" rel="noopener noreferrer">here</a> to see the code on Github.
                <i>(Future improvement: adjust responsiveness)</i>
            </Trans>
        )

        return null;
    }

    render() {
        const { projectModal: project } = this.props;
        return (
            <Modal ref={(elem) => { this.modal = elem; }}>
                <ModalBox ref={(elem) => { this.modalBox = elem; }}>
                    <ModalHeader>
                        <div onClick={() => this.closeModal()}>&times;</div>
                    </ModalHeader>
                    <ProjectTitle>
                        {project}
                    </ProjectTitle>
                    <ProjectLogo project={project} />
                    <ProjectInformation>
                        {this.renderProjectModalDescription()}
                    </ProjectInformation>
                    <ActionButton>
                        <Button label={'OK'} onClick={() => this.closeModal()}/>
                    </ActionButton>
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
