import React from 'react';

import HeaderMobile from './Components/HeaderMobile';
import SideMenu from './Components/SideMenu';
import MainContainer from './Components/MainContainer';
import BottomMenu from './Components/BottomMenu';
import './App.css';

const App = () => (
  <div className="App">
    <HeaderMobile />
    <SideMenu />
    <MainContainer />
    <BottomMenu />
  </div>
);

export default App;
