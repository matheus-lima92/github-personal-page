import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import About from 'Components/About';
import { MainContainerStyled } from './style';

const MainContainer = ({ screen }) => (
  	<MainContainerStyled>
    	{screen === 'about' && <About />}
	</MainContainerStyled>
);

MainContainer.propTypes = {
	screen: PropTypes.string
};

const mapStateToProps = state => ({
  screen: state.mainContainer,
});

export default connect(mapStateToProps, null)(MainContainer);