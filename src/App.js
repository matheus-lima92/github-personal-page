import React from 'react';

import HeaderMobile from './Components/HeaderMobile';
import SideMenu from './Components/SideMenu';
import MainContainer from './Components/MainContainer';
import BottomMenu from './Components/BottomMenu';
import Languages from './Components/Languages';
import './App.css';

const App = () => (
  <div className="App">
    <Languages />
    <HeaderMobile />
    <SideMenu />
    <MainContainer />
    <BottomMenu />
  </div>
);

export default App;
