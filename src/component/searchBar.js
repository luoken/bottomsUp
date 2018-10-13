import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class Search extends Component{
    render(){
        return(
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: '5%'}}>
                <TextField 
                    placeholder="Enter Ingredient"
                />
            </div>
        );
    }
}

export default Search;