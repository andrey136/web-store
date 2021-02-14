import React from 'react';
import InformationForm from './InformationForm';
import '../../App.css';

class MainContent extends React.Component {
    render(){
        return (
    <div className="main-content">
        <div className="first-banner">
            Banner
        </div>
        <div className="first-row-products">
            <h2>Хиты продаж</h2>
            <div className="row-products">
                <div className="flex_container">

                    <div className="product">
                        <div className="img">
                            <font>Photo</font>
                            <img />
                        </div>
                        <div className="Description">
                            <div className="model-info">Новые смартфоны и телевизоры</div>
                            <div className="model-price">от 14 570 ₽</div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img">
                            <font>Photo</font>
                            <img />
                        </div>
                        <div className="Description">
                            <div className="model-info">Новые смартфоны</div>
                            <div className="model-price">от 14 570 ₽</div>
                        </div>
                    </div>

                    <div className="product">
                        <div className="img">
                            <font>Photo</font>
                            <img />
                        </div>
                        <div className="Description">
                            <div className="model-info">Новые смартфоны</div>
                            <div className="model-price">от 14 570 ₽</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <InformationForm />
    </div>
  );
    }
  
}

export default MainContent;
