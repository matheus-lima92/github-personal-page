import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Trans, withTranslation } from 'react-i18next';
import gsap from 'gsap';

import i18n from 'i18n';
import { hideJobModal } from 'actions/jobModal';
import {
    Modal,
    ModalBox,
    ModalHeader,
    CompanyLogo,
    CompanyInformation
} from './styles';

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
                <a href="https://prioritypaymentsystems.com/" target="_blank">Priority Payment Systems</a>, a north american
                company in the business of payments, which is BairesDev's customer. It's worth mentioning one characteristic
                of Priority Payment Systems: their projects are incredibly well structured, having more than 90% unit tests
                coverage both on frontend and backend.
            </Trans>
        );
        if (company === 'Getty IO') return (<Trans i18nKey="JOB_MODAL_DESCRIPTION_GETTYIO" />);
        if (company === 'Hypnobox') return (
            <Trans i18nKey="JOB_MODAL_DESCRIPTION_HYPNOBOX">
                Hypnobox is a brasilian company in the business of real estate. On Hypnobox I worked as Frontend lead,
                being responsible to refactor and develop new features for <a href="https://99leads.com" target="_blank">99Leads</a>: 
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
                    Aktie Now is a brasilian company that offers customer services solutions for other companies. 
                    They are <a href={zendeskUrl} target="_blank">Zendesk</a>'s major partner in Latin America.
                    At Aktie Now I've developed software for big companies like IBM, Telefônica and TOTVS,
                    that are AktieNow’s customers, and also worked on an inter chatbot project called
                    <a href="https://meudroz.com.br" target="_blank">Droz</a>.
                </Trans>
            )
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
