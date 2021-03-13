import React, {Component} from 'react';
import CategoryPage from './CategoryPage';
import sample_pic from '../../img/iphone-pic.jpg'

class Product extends Component{

    render(){
        return(
            <div className="category-product-form clearfix">
                <div className="img">
                    <img src={this.props.img.default}></img>
                </div>
                <div className="main-product-info-nav">
                    <div className="product-title">{this.props.model}</div>
                    <div className="product-description">{this.props.description}</div>
                    <nav className="product-price-cart-container">
                        <div className="product-price">{this.props.price} руб</div>
                        <div className="product-add-cart">
                            <div className="add-to-card-btn" onClick={() => this.props.incrementQuantity()}>В корзину</div>
                            <div className="product-quantity">{this.props.quantity}</div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Product