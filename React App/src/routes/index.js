import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";

import About from './About.js';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Profile from './Profile';
import Catalogue from './Catalogue';
import Product from './Product';
import Update from './Update';

export default() => (
    
<BrowserRouter>
    <div>
    <Switch>
    <Route exact path="/login" render={props => <Login {...props}/>} />
    <Route exact path="/register" render={props=> <Register {...props} />}/>
    <Route exact path="/about" render={props=> <About {...props} />}/>
    <Route exact path="/"  render={props=> <Home {...props} />}/>
    <Route exact path="/user-profile" render={props => <Profile {...props} />} />
    <Route exact path="/catalogue" render={props => <Catalogue {...props} />} />
    <Route exact path="/home" render={props => <Home {...props} />} />
    <Route exact path="/update" render={props => <Update {...props} />} />
    <Route exact path="/product-view/:id" render={props => <Product {...props} />} />
    <Route path='*' exact={true} component={About} />

    </Switch>0
            <div id="notifications">
                <div id="loadingBox" class="notification"><span>Loading …</span></div>
                <div id="infoBox" class="notification"><span>Info</span></div>
                <div id="errorBox" class="notification"><span>Error</span></div>
            </div>

    </div>
</BrowserRouter>
    

  
    
);