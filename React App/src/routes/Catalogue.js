import React from 'react';

import NavBar from '../components/Navbar.jsx';
import Footer from '../components/footer.jsx';
import ProductCard from '../components/productCard';
import YouTube from 'react-youtube';
import ProductCreator from '../components/CreateProduct'
import product from "../services/productsService.js";
import notify from "../services/notify.js";
import remote from "../services/remote.js";
import auth from "../services/authService.js";



export default class Catalogue extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            products:[]
        }
    } 
     componentDidMount(){
        this.getProducts();
    }

    getProducts = () => {
        product.getAllProducts().then(data => this.setState({products: data}))
        .catch(notify.handleError);
    }

    render() {
        
        let Products = this.state.products.map(p => <ProductCard price={p.price} productDesc={p.productDesc} productName={p.productName} imgUrl={p.imgUrl} id={p._id}/>)
        let isAdmin = sessionStorage.getItem("isAdmin");
        let productCreatorProps;
        if(isAdmin==="true"){
            productCreatorProps = 
            <ProductCreator/>
        
        }

        
        return (
            <div>

                <NavBar />
                <center>
                    <div class="Product-Container">
                        
                        <center><h4>Contact phone for orders: 0888 123456</h4></center>
                        {productCreatorProps}
                        {Products}
                        
                        
                        
                    </div>
                </center>

                <Footer />
            </div>
        );
    }
}




