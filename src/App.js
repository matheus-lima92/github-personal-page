import React from 'react';

import ProjectModal from './Components/Projects/ProjectModal';
import JobModal from './Components/Experience/JobModal';
import HeaderMobile from './Components/HeaderMobile';
import SideMenu from './Components/SideMenu';
import MainContainer from './Components/MainContainer';
import BottomMenu from './Components/BottomMenu';
import Languages from './Components/Languages';
import './App.css';

const App = () => (
	<div className="App">
		<ProjectModal />
		<JobModal />
		<Languages />
		<HeaderMobile />
		<SideMenu />
		<MainContainer />
		<BottomMenu />
	</div>
);

export default App;
