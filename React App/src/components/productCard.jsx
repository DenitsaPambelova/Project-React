import React from 'react';
import auth from "../services/authService.js";
import notify from "../services/notify.js";
import {Link} from "react-router-dom"
//import add from "../Cart"

export default class ProductCard extends React.Component {

    onSubmit = () => {
      
        
    };


    render() {
          
         return(
             
             <div class="card">
                     <h1 id="productCardTitle">{this.props.productName}</h1>
                 <center><img src={this.props.imgUrl} id="productCardImage"  alt="err" width="300" height="350" /></center>
                     
                    
                     
                 <button id="button3"><Link  to={`/product-view/${this.props.id}`} activeClassName="active">View more</Link></button>

             </div>

         )
        }



        
}

