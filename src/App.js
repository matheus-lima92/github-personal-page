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
			Atualmente a BairesDev é a empresa de desenvolvimento de software que mais cresce na América Latina.
			A empresa destaca-se pelo seu nível de excelência, sendo conhecida por contratar o top 1% para
			os times de engenharia de software. De fato, o processo seletivo foi bastante rigoroso, foram vários
			meses de testes e entrevistas até a efetivação do contrato. No momento eu trabalho em conjunto com
			o time de engenharia da <a href="https://prioritypaymentsystems.com/" target="_blank">Priority Payment Systems</a>,
			uma empresa americana do ramo de pagamentos, que é cliente da BairesDev. Vale citar um ponto sobre a
			Priority Payment Systems: seus projetos são incrivelmente bem estruturados, havendo mais de 90% de
			cobertura de testes unitários tanto no frontend como no backend.
		</Trans>
	);
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
