import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation, Trans, withTranslation } from 'react-i18next';

import JobModal from './Components/Experience/JobModal';
import HeaderMobile from './Components/HeaderMobile';
import SideMenu from './Components/SideMenu';
import MainContainer from './Components/MainContainer';
import BottomMenu from './Components/BottomMenu';
import Languages from './Components/Languages';
import './App.css';

const renderJobModalDescription = (jobModal, t) => {
	if (jobModal === 'BairesDev') return(
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
	if (jobModal === 'Getty IO') return(<Trans i18nKey="JOB_MODAL_DESCRIPTION_GETTYIO" />);
	if (jobModal === 'Hypnobox') return (
		<Trans i18nKey="JOB_MODAL_DESCRIPTION_HYPNOBOX">
			Hypnobox is a brasilian company in the business of real estate. On Hypnobox I worked as Frontend lead,
			being responsible to refactor and develop new features for <a href="https://99leads.com" target="_blank">99Leads</a>: 
			a Vue.js web application destined to increase sellings of real estate agents. Besides 99Leads, I also 
			worked on minor React projects.
		</Trans>
	)
	return null;
}

const App = ({ jobModal, t }) => (
	<div className="App">
		<JobModal>
			{renderJobModalDescription(jobModal, t)}
		</JobModal>
		<Languages />
		<HeaderMobile />
		<SideMenu />
		<MainContainer />
		<BottomMenu />
	</div>
);

App.propType = {
	hideJobModal: PropTypes.func.isRequired,
	jobModal: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
	jobModal: state.jobModal,
});

export default connect(mapStateToProps, null)(withTranslation()(App));
