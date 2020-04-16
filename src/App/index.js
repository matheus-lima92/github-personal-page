import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import JobModal from '../Components/Experience/JobModal';
import HeaderMobile from '../Components/HeaderMobile';
import SideMenu from '../Components/SideMenu';
import MainContainer from '../Components/MainContainer';
import BottomMenu from '../Components/BottomMenu';
import Languages from '../Components/Languages';
import StyledApp from './styles';

const App = ({ jobModal }) => (
  <StyledApp jobModal={jobModal}>
    <JobModal />
    <Languages />
    <HeaderMobile />
    <SideMenu />
    <MainContainer />
    <BottomMenu />
  </StyledApp>
);

App.propType = {
  hideJobModal: PropTypes.func.isRequired,
  jobModal: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  jobModal: state.jobModal,
});

export default connect(mapStateToProps, null)(App);
