import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import '../App.css';

function Cocktails(props){
    return(
        <div style={{paddingBottom:'10px'}}>
            <div>
              <img src={props.hit.strDrinkThumb} alt={props.hit.strDrink} width="40" height="40"/>
                <span style={{paddingRight:"40px", paddingLeft: "10px"}}>{props.hit.strDrink}</span>
            </div>
            <div>
            </div>
            <div style={{fontSize: '12px'}}>
                <span style={{paddingRight:"20px"}}>Ingredients: </span>
                <span className="Cocktails-Spacing">{props.hit.strCategory}</span>
                <span className="Cocktails-Spacing">{props.hit.strIngredient1}</span>
                <span className="Cocktails-Spacing">{props.hit.strIngredient2}</span>
                <span className="Cocktails-Spacing">{props.hit.strIngredient3}</span>
                <span className="Cocktails-Spacing">{props.hit.strIngredient4}</span>
                <span className="Cocktails-Spacing">{props.hit.strIngredient5}</span>
                <span className="Cocktails-Spacing">{props.hit.strIngredient6}</span>
                <span className="Cocktails-Spacing">{props.hit.strIngredient7}</span>
                <span className="Cocktails-Spacing">{props.hit.strIngredient8}</span>
                <span className="Cocktails-Spacing">{props.hit.strIngredient9}</span>
                <span className="Cocktails-Spacing">{props.hit.strIngredient10}</span>
                <span className="Cocktails-Spacing">{props.hit.strIngredient11}</span>
                <span className="Cocktails-Spacing">{props.hit.strIngredient12}</span>
                <span className="Cocktails-Spacing">{props.hit.strIngredient13}</span>
                <span className="Cocktails-Spacing">{props.hit.strIngredient14}</span>
                <span className="Cocktails-Spacing">{props.hit.strIngredient15}</span>
            </div>
        </div>
    )
}  


export default Cocktails;


/*
            <table className="table">
                <tbody>
                    <tr>
                        <td>{props.hit.strDrink}</td>
                        <td>{props.hit.strCategory}</td>
                        <td>{props.hit.strIngredient1}</td>
                        <td>{props.hit.strIngredient2}</td>
                        <td>{props.hit.strIngredient3}</td>
                        <td>{props.hit.strIngredient4}</td>
                        <td>{props.hit.strIngredient5}</td>
                        <td>{props.hit.strIngredient6}</td>
                        <td>{props.hit.strIngredient7}</td>
                        <td>{props.hit.strIngredient8}</td>
                        <td>{props.hit.strIngredient9}</td>
                        <td>{props.hit.strIngredient10}</td>
                        <td>{props.hit.strIngredient11}</td>
                        <td>{props.hit.strIngredient12}</td>
                        <td>{props.hit.strIngredient13}</td>
                        <td>{props.hit.strIngredient14}</td>


                    </tr>
                </tbody>
            </table>
*/