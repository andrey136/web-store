import React from 'react';
import '../../App.css';

class SearchBar extends React.Component {
    render(){
        return (
    <div class="input-group mb-3">
        <input type="text" className="form-control" placeholder="Поиск по сайту" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Искать</button>
    </div>      
  );
    }
  
}

export default SearchBar;
