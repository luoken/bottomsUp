import React, { Component } from 'react';
import './App.css';
import {InstantSearch, Hits, Highlight, Configure, SearchBox,
	ClearRefinements, RefinementList, SortBy} from 'react-instantsearch-dom';
// import Search from './component/searchBar';
// import Cocktail from './component/cocktail';
import Cocktails from './component/cocktails';



const appId='M3OEEU8RL9';
const apiKey="a8c912614f3096773cb168c43e710bc0";
const indexName="ingredients_NAME";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      drinks: []
    }

  }

  render() {
      return (
	      <div style={{paddingLeft: '20px'}}>
	      <h1 style={{margin:'5px'}}>Bottoms Up</h1>
	      <InstantSearch
          appId={appId}
          apiKey={apiKey}
          indexName={indexName}
          onSearchStateChange={this.props.onSearchStateChange}
        >
          <div className="left-panel">
            <ClearRefinements />
            <h2 style={{margin: '5px'}}>Category</h2>
            <RefinementList attribute="strCategory" />
          </div>
          <div className="right-panel">
            <Configure hitsPerPage={8} />
            <SearchBox className='input'/>
            <SortBy
              defaultRefinement="ingredients_NAME"
              items={[
                {label: "Name Asc.", value: "ingredients_NAME"},
                {label: "Name Desc.", value: "ingredients_name_desc"}
              ]}
            />
            <Hits hitComponent={Cocktails}/>
	      </div>
        </InstantSearch>
      </div>
    );
  }
}

export default App;
