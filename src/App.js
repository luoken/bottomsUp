import React, { Component } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  SortBy,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="bottomsUp-InstantSearch">
        <h1>Bottoms UP</h1>
        <InstantSearch
          appId="M3OEEU8RL9"
          apiKey="a8c912614f3096773cb168c43e710bc0"
          indexName="ingredients_NAME"
            >

          <div className="left-panel">
            <ClearRefinements />
            <h2>Category</h2>
            <RefinementList attribute="strCategory" />
            <Configure hitsPerPage={8} />
          </div>
            <div className="right-panel">
	    
            <SearchBox />
	    <SortBy
	defaultRefinement="ingredients_NAME"
	items={[
	    {label: "", value: "ingredients_NAME"},
	    {label: "Name Asc.", value: "ingredients_name_asc"},
	    {label: "Name Desc.", value: "ingredients_name_desc"}
	]}
	    />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <div>
	  <img src={props.hit.strDrinkThumb} align="left" alt={props.hit.strDrink} />
	  
      <div className="hit-name">
          <Highlight attribute="name" hit={props.hit.strDrink} />{props.hit.strDrink}
      </div>x
	  
      <div className="hit-description">
          <Highlight attribute="description" hit={props.hit.strIngredient1} />
      </div>
      <div className="hit-price">{props.hit.strIngredient1}</div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
