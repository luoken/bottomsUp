import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {Highlight }from 'react-instantsearch-dom';


// let id = 0;
// function createData(name, type, ingredient1, ingredient2, ingredient3,ingredient4,ingredient5,ingredient6) {
//     id += 1;
//     return { id, name, type, ingredient1, ingredient2, ingredient3,ingredient4,ingredient5,ingredient6};
//   }
// const rows = [
//     createData('\'57 Chevy with a White License Plate', 'Cocktail', 'Creme de Cacao', 'Vodka'),
//     createData('Ice cream sandwich', 'Shot', 'Absolut Kurant', 'Grand Marnier', 'Chambord raspberry liqueur', 'Midori melon liqueur', 'Malibu rum'),
//     createData('110 in the shade', 'Beer', 'Lager', 'Tequila', '151 proof rum', 'Dark Creme de Cacao','Cointreau'),
//     createData('151 Florida Bushwacker', 'Milk / Float / Shake', 'Malibu rum', 'Light rum', 'Vodka','Orange juice'),
//     createData('155 Belmont', 'Cocktail', 'Dark rum', 'Light rum', 'Rumple Minze','151 proof rum'),
//   ];

// function Cocktails(props) {
//     const { classes } = props;
    
//     return (
//       <Paper>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Drink</TableCell>
//               <TableCell>Type</TableCell>
//               <TableCell>ingredient1</TableCell>
//               <TableCell>ingredient2</TableCell>
//               <TableCell>ingredient3</TableCell>
//               <TableCell>ingredient4</TableCell>
//               <TableCell>ingredient5</TableCell>
//               <TableCell>ingredient6</TableCell>
//              </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map(row => {
//               return (
//                 <TableRow key={row.id}>
//                   <TableCell component="th" scope="row">
//                     {row.name}
//                   </TableCell>
//                   <TableCell>{row.type}</TableCell>
//                   <TableCell>{row.ingredient1}</TableCell>
//                   <TableCell>{row.ingredient2}</TableCell>
//                   <TableCell>{row.ingredient3}</TableCell>
//                   <TableCell>{row.ingredient4}</TableCell>
//                   <TableCell>{row.ingredient5}</TableCell>
//                   <TableCell>{row.ingredient6}</TableCell>
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </Paper>
//     );
//   }
    function Cocktails(props){
        return(
            <div>
                <div className="hit-name">        
                    {props.hit.strDrink}
                </div>
            </div>
        )
    }  


export default Cocktails;