import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import About from 'Components/About';
import Experience from 'Components/Experience';
import Projects from 'Components/Projects';
import Contact from 'Components/Contact';

import { MainContainerStyled } from './style';

const MainContainer = ({ screen }) => (
  	<MainContainerStyled>
    	{screen === 'about' && <About />}
		{screen === 'experience' && <Experience />}
		{screen === 'projects' && <Projects />}
		{screen === 'contact' && <Contact />}
	</MainContainerStyled>
);

MainContainer.propTypes = {
	screen: PropTypes.string
};

const mapStateToProps = state => ({
  screen: state.mainContainer,
});

export default connect(mapStateToProps, null)(MainContainer);