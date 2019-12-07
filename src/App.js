import React from 'react';

import SideMenu from './Components/SideMenu';
import HeaderMobile from './Components/HeaderMobile';
import BottomMenu from './Components/BottomMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderMobile />
      <SideMenu />
      <BottomMenu />
    </div>
  );
}

export default App;
