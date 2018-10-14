import React, { Component } from 'react';
import './App.css';
import {InstantSearch, Hits, Highlight} from 'react-instantsearch-dom';
import Search from './component/searchBar';
// import Cocktail from './component/cocktail';
import Cocktails from './component/cocktails';



const appId=process.env.REACT_APP_ALGOLIA_KEY
const apiKey=process.env.REACT_APP_ALGOLIA_APIKEY
const indexName=process.env.REACT_APP_ALGOLIA_KEY_INDEXNAME

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      drinks: []
    }

  }

  render() {
    return (
      <div>
        <InstantSearch
          appId={appId}
          apiKey={apiKey}
          indexName={indexName}
          onSearchStateChange={this.props.onSearchStateChange}
          >
            <Search/>
            <Hits hitComponent={Cocktails}/>

          </InstantSearch>


      </div>
    );
  }
}

function Hit(props) {
  console.log(props.hit);
  console.log(props.hit.strDrink);
  return (
    <div>
      <div className="hit-name">
      {props.hit.strDrink}
        <Highlight attribute="strDrink" hit={props.hit.strDrink} />
      </div>
    </div>
  );
}

export default App;
