import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './component/searchBar';
import Cocktail from './component/cocktail';
import Cocktails from './component/cocktails';

class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        
        <Cocktails/>
      </div>
    );
  }
}

export default App;
