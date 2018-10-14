import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import '../App.css';

class Cocktails extends Component{
    render(){
        return(
            <div style={{paddingBottom:'10px'}}>
                <div>
                <img style={{flexDirection:'row'}}src={this.props.hit.strDrinkThumb} alt={this.props.hit.strDrink} align="left"/>
                    <div className="hit-name">
                        <span style={{paddingRight:'20px'}}>{this.props.hit.strDrink}</span>
                        <span className="Cocktails-Spacing" style={{fontSize:'12px'}}>{this.props.hit.strCategory}</span>
                    </div>
                </div>
                <div>
                </div>
                <div style={{fontSize: '12px', flexDirection:'row'}}>
                    <span style={{paddingRight:"20px"}}><u>Ingredients: </u></span>
                    <li>{this.props.hit.strIngredient1}</li>
                    <li>{this.props.hit.strIngredient2}</li>
                    <li>{this.props.hit.strIngredient3}</li>
                    <li>{this.props.hit.strIngredient4}</li>
                    <li>{this.props.hit.strIngredient5}</li>
                    <li>{this.props.hit.strIngredient6}</li>
                    <li>{this.props.hit.strIngredient7}</li>
                    <li style={{paddingLeft:'176px'}}>{this.props.hit.strIngredient8}</li>
                    <li style={{paddingLeft:'176px'}}>{this.props.hit.strIngredient9}</li>
                    <li style={{paddingLeft:'176px'}}>{this.props.hit.strIngredient10}</li>
                    <li style={{paddingLeft:'176px'}}>{this.props.hit.strIngredient11}</li>
                    <li style={{paddingLeft:'176px'}}>{this.props.hit.strIngredient12}</li>                   
                    <li style={{paddingLeft:'176px'}}>{this.props.hit.strIngredient13}</li>
                    <li style={{paddingLeft:'176px'}}>{this.props.hit.strIngredient14}</li>                    
                    <li style={{paddingLeft:'176px'}}>{this.props.hit.strIngredient15}</li>
                </div>
            </div>
        )
            }
}  


export default Cocktails;