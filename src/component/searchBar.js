import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class Search extends Component{
    render(){
        return(
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '5%'}}>
                <TextField 
                    placeholder="Enter Drink or ingredient(s)"
                    fullWidth={true}
                    autoFocus={true}
                />
            </div>
        );
    }
}

export default Search;


/*
    <input
      type="text"
      value={currentRefinement}
      onChange={e => refine(e.target.value)}
      autoComplete="off"
      className="form-control"
      id="q"
/>
*/