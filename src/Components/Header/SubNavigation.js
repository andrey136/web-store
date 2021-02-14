import React from 'react';
import '../../App.css';
import SearchBar from './SearchBar'

class SubNavigation extends React.Component {
    render(){
        return (
    <div className="subNav">
          <div className="container flex_container">
            <div className="logo">Device world</div>
            <SearchBar />
              <div className="container_flex cartSingUpNav">
                <div className="cart">Корзина</div>
                <div className="singIn">Войти</div>
              </div>
            </div>
          </div>
  );
    }
  
}

export default SubNavigation;
