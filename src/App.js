import React from 'react';

import JobModal from './Components/Experience/JobModal';
import HeaderMobile from './Components/HeaderMobile';
import SideMenu from './Components/SideMenu';
import MainContainer from './Components/MainContainer';
import BottomMenu from './Components/BottomMenu';
import Languages from './Components/Languages';
import './App.css';

const App = () => (
	<div className="App">
		<JobModal />
		<Languages />
		<HeaderMobile />
		<SideMenu />
		<MainContainer />
		<BottomMenu />
	</div>
);

export default App;
