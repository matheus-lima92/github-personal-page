import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import About from 'Components/About';
import Experience from 'Components/Experience';
import Skills from 'Components/Skills';
import Projects from 'Components/Projects';

import { MainContainerStyled } from './style';

const MainContainer = ({ screen }) => (
  	<MainContainerStyled>
    	{screen === 'about' && <About />}
		{screen === 'experience' && <Experience />}
		{screen === 'skills' && <Skills />}
		{screen === 'projects' && <Projects />}
	</MainContainerStyled>
);

MainContainer.propTypes = {
	screen: PropTypes.string
};

const mapStateToProps = state => ({
  screen: state.mainContainer,
});

export default connect(mapStateToProps, null)(MainContainer);