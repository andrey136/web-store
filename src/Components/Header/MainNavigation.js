import React from 'react';
import '../../App.css';

class MainNavigation extends React.Component {

    change_page(code){
        this.props.change_page(code)
    }

    render() {
        return (
            <nav className="MainNavigation">
                <ul>
                    <li><div className="link" onClick={() => this.change_page(0)}>Телевизоры</div></li>
                    <li><div className="link" onClick={() => this.change_page(1)}>Компьютеры</div></li>
                    <li><div className="link" onClick={() => this.change_page(2)}>Телефоны</div></li>
                    <li><div className="link" onClick={() => this.change_page(3)}>Холодильник</div></li>
                </ul>
            </nav>
        );
    }

}

export default MainNavigation;
