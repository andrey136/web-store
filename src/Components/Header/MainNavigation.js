import React from 'react';
import '../../App.css';

class MainNavigation extends React.Component {
    render() {
        return (
            <nav className="MainNavigation">
                <ul>
                    <li><div className="link">Телевизоры</div></li>
                    <li><div className="link">Компьютеры</div></li>
                    <li><div className="link">Телефоны</div></li>
                    <li><div className="link">Холодильник</div></li>
                </ul>
            </nav>
        );
    }

}

export default MainNavigation;
