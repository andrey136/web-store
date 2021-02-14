import React from 'react';
import '../../App.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="main-footer-container">
                    <div className="companiy-loggo-footer">
                        <div className="loggo-text">Device World</div>
                    </div>
                    <div className="footer-seperate-line"></div>
                    <div className="flex-container">
                        <div className="contanct-info"></div>
                        <div className="social-media"></div>
                    </div>
                </div>
            </footer>
        );
    }

}

export default Footer;
