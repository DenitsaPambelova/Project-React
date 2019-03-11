import React from 'react';

import { Button } from 'antd';
import NavBar from '../components/Navbar.jsx';

import Footer from '../components/footer.jsx';

import notify from "../services/notify.js";
import remote from "../services/remote.js";
import auth from "../services/authService.js";
import { Redirect } from 'react-router-dom'
import reactDOM from 'react'

export default class Login extends React.Component{
    state = {
        username: '',
        email: '',
        password: '',
        isAdmin: false,
    }
    
    onChange = (e) => {
        
        {
            this.setState({
                [e.target.name]: e.target.value,
            })
        }
       
    }

    onSubmit = () => {
        let username = this.state.username;
        let password = this.state.password;
        let isAdmin = this.state.isAdmin;

        auth.login(username, password)
            .then((userData) => {
              
                auth.saveSession(userData);
                notify.showInfo("Logged in successfully!");
                window.location = "Products";
                
                

            })
            .catch(() => notify.showError("Login Error"))
        

    }
    render()  {
        return(

            
            <div>
                <NavBar />
                

                <center><form id="loginForm">
                    <label>
                        Username:<input type="text" name="username" onChange={e => this.onChange(e)}
                            value={this.state.username} />
                    </label><br />

                    

                    <label>
                        Password:<input type="password" name="password" onChange={e => this.onChange(e)}
                            value={this.state.password} />
                    </label><br />


                    

                    {/*button*/}
                    <Button id="btnLogin" onClick={() => this.onSubmit()} type="primary">Login</Button>
                </form></center><br />



                <Footer />
            </div>
    
    
        );
        

    }
}



        
    
    
    
    
    
    
    