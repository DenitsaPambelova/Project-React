import React from 'react';
import auth from "../services/authService.js";
import notify from "../services/notify.js";


export default class Navbar2 extends React.Component{
    
    onSubmit = () => {
        
        auth.logout().then(() => {
            
            sessionStorage.clear();
            notify.showInfo("User Logged Out!")
            window.location = "/login";
            
            
        }).catch(notify.handleError);
    }
    
    
    render()  {
        
            const isLoggedIn = auth.isAuth();
            let isAdmin = sessionStorage.getItem("isAdmin");
            let navProperties;
            
            if (isLoggedIn) {
                let username = sessionStorage.getItem('username');

                navProperties =
                <div id="menu">

                    <ul>
                        <li><span class="logo"><img src="https://ya-webdesign.com/images250_/yoga-clipart-yoga-instructor-2.png"   alt="err" width="90" height="90" /></span></li>
                        <li id="about"><a href="/about">About Yoga</a></li>
                        <li><a href="/home">Video</a></li>
                        <li><a href="./catalogue">Products</a></li>
                        <li><a href="./user-profile">Profile</a></li>
                        <li><a onClick={() => this.onSubmit()}>Logout</a></li>
                        <li2>User: <img class="profilePic" src={sessionStorage.getItem("profilePic")} alt="yoga" alt="err" width="50" height="50" /><a id="a2" href="/user-profile">{username}</a></li2>


                    </ul>

                </div>;
            } else {
                
                navProperties =
                    <div id="menu">

                        <ul>
                            <li><span class="logo"><img src="https://ya-webdesign.com/images250_/yoga-clipart-yoga-instructor-2.png" alt="yoga" alt="err" width="90" height="90" /></span></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                            <li><a href="/home">Video</a></li>
                            <li id="about"><a href="/about">About</a></li>


                        </ul>

                    </div>;
            }

            return(
                    navProperties
            )
        }
        
        
       
        
    }

