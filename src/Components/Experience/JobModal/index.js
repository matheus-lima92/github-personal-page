import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Trans, withTranslation } from 'react-i18next';
import gsap from 'gsap';

import i18n from 'i18n';
import { hideJobModal } from 'actions/jobModal';
import Button from 'Components/common/Button';
import {
    Modal,
    ModalBox,
    ModalHeader,
    CompanyLogo,
    CompanyInformation,
    ActionButton,
} from './styles';
import cnpqPresentation from 'files/Painel.pptx';

const getCompanyI18nKey = (prefix, company = '') => {
    if (!company || !prefix) return 'TRANSLATION_NOT_FOUND';
    return `${prefix}_${company.replace(/ +/g, '').toUpperCase()}`;
}

class JobModal extends React.Component {

    constructor(props) {
        super(props);
        this.modal = React.createRef();
        this.modalBox = React.createRef();
        this.closeModal = this.closeModal.bind(this);
        this.renderJobModalDescription = this.renderJobModalDescription.bind(this);
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

    renderJobModalDescription(){
        const { jobModal: company } = this.props;
        const currentLanguage = i18n.language;
    
        if (company === 'BairesDev') return (
            <Trans i18nKey="JOB_MODAL_DESCRIPTION_BAIRESDEV">
                BairesDev is the fastest growing Nearshore Software Outsourcing company in Latin America.
                The company is distinguished by its level of excellence, and is known by hiring only the top 1%
                software engineers. In fact, the selection process was very criterious, several tests and interviews
                were necessary before signing the contract. Currently I work with the engineering team of
                <a href="https://prioritypaymentsystems.com/" target="_blank" rel="noopener noreferrer">Priority Payment Systems</a>, a north american
                company in the business of payments, which is BairesDev's customer. It's worth mentioning one characteristic
                of Priority Payment Systems: their projects are incredibly well structured, having more than 90% unit tests
                coverage both on frontend and backend.
            </Trans>
        );
        if (company === 'Getty IO') return (<Trans i18nKey="JOB_MODAL_DESCRIPTION_GETTYIO" />);
        if (company === 'Hypnobox') return (
            <Trans i18nKey="JOB_MODAL_DESCRIPTION_HYPNOBOX">
                Hypnobox is a brasilian company in the business of real estate. On Hypnobox I worked as Frontend lead,
                being responsible to refactor and develop new features for <a href="https://99leads.com" target="_blank" rel="noopener noreferrer">99Leads</a>: 
                a Vue.js web application destined to increase sellings of real estate agents. Besides 99Leads, I also 
                worked on minor React projects.
            </Trans>
        );
        if (company === 'Aktie now') {
            const zendeskUrl = currentLanguage === 'en'
                ? 'https://www.zendesk.com'
                : 'https://www.zendesk.com.br';
            return (
                <Trans i18nKey="JOB_MODAL_DESCRIPTION_AKTIENOW">
                    AktieNow is a brasilian company that offers customer services solutions for other companies. 
                    They are <a href={zendeskUrl} target="_blank" rel="noopener noreferrer">Zendesk</a>'s major partner in Latin America.
                    At AktieNow I've developed software for big companies like IBM, Telefônica and TOTVS,
                    that are AktieNow’s customers, and also worked on an inter chatbot project called
                    <a href="https://meudroz.com.br" target="_blank" rel="noopener noreferrer">Droz</a>.
                </Trans>
            );
        }
        if (company === 'CNPEM') {
            const siriusUrl = currentLanguage === 'en'
                ? 'https://www.lnls.cnpem.br/sirius-en/sirius-project/'
                : 'https://www.lnls.cnpem.br/sirius/projeto-sirius/';
            return (
                <Trans i18nKey="JOB_MODAL_DESCRIPTION_CNPEM">
                    CNPEM are the initials for Brazilian Center for Research in Energy and Materials. As the name suggests,
                    it is a research center financed by the brazilian government. I had the opportunity to work on CNPEM before
                    finishing my engineering degree, through an internship program. The work experience has been very unique,
                    CNPEM has amazing projects and recently inaugurated <a href={siriusUrl} target="_blank" rel="noopener noreferrer">Sirius</a>,
                    the new Brazilian synchrotron light source: a particle accelerator that is the largest and most complex research 
                    infrastructure ever built in Brazil. During the internship program I have developed prototypes of embbeded systems 
                    that would be used in the particle accelerator.
                </Trans>
            );
        }
        if (company === 'Wise') {
            return <Trans i18nKey="JOB_MODAL_DESCRIPTION_WISE" />
        }
        if (company === 'CNPQ') {
            return (
                <Trans i18nKey="JOB_MODAL_DESCRIPTION_CNPQ">
                    CNPQ, the National Council for Scientific and Technological Development, is a public foundation linked to the Ministry of Science,
                    Technology, Innovations and Communications. Its main duties are to encourage scientific, technological and innovation research and
                    promote the training of qualified human resources for research, in all areas of knowledge. It was through a partnership
                    from CNPQ with my university, that I got a scientific initiation scholarship to do my first paid job
                    in the programming area. The project was related to autonomous mobility: the challenge was to develop the software for a scale
                    autonomous vehicle, so that it communicated with the sensors and could identify a parking space. After finding the vacancy,
                    the vehicle should be able to park alone, without human interference. The scientific initiation project lasted one year, and the results
                    were quite satisfactory. You can click <a href={cnpqPresentation} download="cnpq_final_presentation.pptx">here</a> 
                    to check the final presentation (Portuguese only).
                </Trans>
            );
        }
        return null;
    }

    render() {
        const { jobModal: company, t } = this.props;
        return (
            <Modal ref={(elem) => { this.modal = elem; }}>
                <ModalBox ref={(elem) => { this.modalBox = elem; }}>
                    <ModalHeader>
                        <div onClick={() => this.closeModal()}>&times;</div>
                    </ModalHeader>
                    <CompanyLogo company={company} />
                    <CompanyInformation>
                        <div>
                            <b>{t('JOB_MODAL_SUBTITLE_COMPANY')}</b>
                            <span>{t(getCompanyI18nKey('JOB_MODAL_COMPANY', company))}</span>
                        </div>
                        <div>
                            <b>{t('JOB_MODAL_SUBTITLE_WEBSITE')}</b>
                            <a href={t(getCompanyI18nKey('JOB_MODAL_WEBSITE_ANCHOR', company))} target='blank'>
                                {t(getCompanyI18nKey('JOB_MODAL_WEBSITE', company))}
                            </a>
                        </div>
                        <div>
                            <b>{t('JOB_MODAL_SUBTITLE_COMPANY_TIME')}</b>
                            <span>{t(getCompanyI18nKey('JOB_MODAL_COMPANY_TIME', company))}</span>
                        </div>
                        <div>
                            <b>{t('JOB_MODAL_SUBTITLE_DESCRIPTION')}</b>
                            {this.renderJobModalDescription()}
                        </div>
                        <div>
                            <b>{t('JOB_MODAL_SUBTITLE_TECHS')}</b>
                            <span>{t(getCompanyI18nKey('JOB_MODAL_TECHS', company))}</span>
                        </div>
                    </CompanyInformation>
                    <ActionButton>
                        <Button label="OK" onClick={() => this.closeModal()}/>
                    </ActionButton>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(JobModal));
