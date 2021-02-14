import React from 'react';
import MainNavigation from './MainNavigation'
import SubNavigation from './SubNavigation'
import '../../App.css';

class Header extends React.Component {
    render(){
        return (
    <div className="Header">
      <header>
        <h1 className="LandingPage">Landing Page</h1>
          <MainNavigation />
          <SubNavigation />
      </header>
    </div>
  );
    }
  
}

export default Header;
