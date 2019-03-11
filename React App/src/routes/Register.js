import React from 'react';
import {  Checkbox, Button } from 'antd';
import ReactDOM from 'react-dom';
import NavBar from '../components/Navbar.jsx';
import Footer from '../components/footer.jsx';


import notify from "../services/notify.js";
import remote from "../services/remote.js";
import auth from "../services/authService.js";





export default class Register extends React.Component{
    state ={
        username:'',
        email:'',
        password:'',
        repeatPass: '',
        isAdmin: false,
    }

    onChange = (e) =>{
        
        if(e.target.name ==='isAdmin'){
            this.setState({
                [e.target.name]:e.target.checked,
            })
        }
        else {
            this.setState({
                [e.target.name]:e.target.value,
            })
        }
        
    }

    onSubmit = () =>{
        let username = this.state.username;
        let email = this.state.email;
        let password = this.state.password;
        let repeatPassword = this.state.repeatPass
        let isAdmin = this.state.isAdmin;
        let profilePic = "data:image/jpeg;base64,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";
        
        
        if(username.length<3){
            notify.showError('Username Should Be Longer!');
        }
        else if (password.length < 8) {
            notify.showError("Password Should Be Longer!");
        }
        else if (password !== repeatPassword) {
            notify.showError("Passwords Must Match!");
        }
        else{
            auth.register(username, password, isAdmin, profilePic).then((userData) => {
                
                
                notify.showInfo("Registered");
                window.location = "login";
                
                
                
            }).catch(() => notify.showError("Register Error"))
                
            
        }
    }

    render()  {
        return(
            <div> 
                 <NavBar/>
                 
                
                <center><form action="#/register" method="post" id="registerForm">
                    <label>
                        Username:<input type="text" name="username" onChange={e => this.onChange(e)}
                            value={this.state.username} />
                    </label><br />
                     
                   
                    
                    <label>
                        Password:<input type="password"  name="password" onChange={e => this.onChange(e)}
                            value={this.state.password} />
                    </label><br />

                    <label>
                        Password Check:<input type="password" name="repeatPass" onChange={e => this.onChange(e)}
                            value={this.state.repeatPass} />
                    </label><br />
                    
                    
                    {/*checkbox*/}
                    <Checkbox name='isAdmin' checked={this.state.isAdmin} onChange={e => this.onChange(e)}>
                    Admin?
                    </Checkbox><br/>
                    
                    {/*button*/}
                    <Button id="btnRegister" onClick={() => this.onSubmit()} type="submit">Register</Button>
                    </form></center><br />

                  

                
                
                
               
                <Footer/>
            </div>
        );
    }
}