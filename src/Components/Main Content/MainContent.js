import React from 'react';
import InformationForm from './InformationForm';
import Banner from './Banner'
import '../../App.css';
import icon_1 from '../../img/iphone-pic.jpg';
import icon_2 from '../../img/samsung-tv.jpg';
import icon_3 from '../../img/fridge-1.jpg';

class MainContent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      products: {
        0: { img: icon_1, description: "Новые смартфоны", price: "14 570" },
        1: { img: icon_2, description: "Новые телевизоры", price: "14 570" },
        2: { img: icon_3, description: "Новые холодильники", price: "14 570" },
      }
    }
  }

  render() {
    return (
      <div className="main-content">
        <Banner />
        <div className="first-row-products">
          <h2>Хиты продаж</h2>
          <div className="row-products">
            <div className="flex_container">
              {Object.keys(this.state.products).map(key =>
                <div className="position-relative">
                  <div className="product">

                    <div className="img">
                      <img src={this.state.products[key].img} />
                    </div>
                    <div className="Description">
                      <div className="model-info">{this.state.products[key].description}</div>
                      <div className="model-price">от {this.state.products[key].price} ₽</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
        <InformationForm />
      </div>
    );
  }

}

export default MainContent;
