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
        {/* <div className="subNav">
          <div className="container flex_container">
            <div className="logo">Device world</div>
            <div class="input-group mb-3">
              <input type="text" className="form-control" placeholder="Поиск по сайту" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
              <button className="btn btn-outline-secondary" type="button" id="button-addon2">Искать</button>
            </div>
              <div className="container_flex cartSingUpNav">
                <div className="cart">Корзина</div>
                <div className="singIn">Войти</div>
              </div>
            </div>
          </div> */}
          <SubNavigation />
      </header>
    </div>
  );
    }
  
}

export default Header;
