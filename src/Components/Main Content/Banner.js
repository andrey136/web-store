import React from 'react';
import '../../App.css';
import banner from '../../img/banner2.jpg'

class Banner extends React.Component {
    render(){
        return (
    <div className="first-banner">
        <img src={banner} />
    </div>
  );
    }
  
}

export default Banner;
