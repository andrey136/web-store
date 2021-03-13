import './App.css';
import Header from './Components/Header/Header'
import MainContent from './Components/Main Content/MainContent'
import Footer from './Components/Footer/Footer';
import React, {Component} from 'react';
import CategoryPage from './Components/Products/CategoryPage'

class App extends Component{

  constructor(props){
    super(props);

    // landing page is a boolean variable that tells us to show the landing page(if true)
    //  or one of category page(if false)
    // category_page_titles is an object with various titles for category_page
    // current_category_page is a key for an object(category_page_titles) basically tells 
    // category page what tile to show
    this.state = {
      landing_page: true,
      category_page_titles : {
        0: {title: "Smart TV(Телевизоры)", category: "TVs"},
        1: {title: "Компьютеры Ноутбуки ПК", category: "computers"},
        2: {title: "Мобильные телефоны", category: "mobile_devices"},
        3: {title: "Холодильники", category: "refrigerators"}
      },
      current_category_page: null,
    }
  }

  change_page(code){
    // any number less than 10 is category page
    // 666 is main page
    console.log(code)

    this.setState({
      current_category_page: code,
      landing_page: false,
    })
  }

  render(){
    return (
    <div className="App">
      <Header change_page={(code) => this.change_page(code)}/>
      {this.state.landing_page ? <MainContent /> : <CategoryPage category_info={this.state.category_page_titles[this.state.current_category_page]}/>}
      <Footer />
    </div>
  );
  }
}

export default App;
