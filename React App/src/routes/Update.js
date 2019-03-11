import React from 'react';
import { Checkbox, Button } from 'antd';
import ReactDOM from 'react-dom';
import NavBar from '../components/Navbar.jsx';
import Footer from '../components/footer.jsx';


import notify from "../services/notify.js";
import remote from "../services/remote.js";
import auth from "../services/authService.js";





export default class Update extends React.Component {
    state = {
        
    }

    onChange = (e) => {

       
    }

    onSubmit = () => {
        
        
    }

    render() {
        return (
            <div>
                <NavBar />


                
                <div id="productInfo">
                    <center><label id="productTitle"></label></center>

                    <div id="description">
                        
                    </div>

                    <div id="priceDiv">
                        <h4>Price:  $</h4>
                    </div>

                    

                </div>



                <Footer />
            </div>
        );
    }
}