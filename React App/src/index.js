import React from 'react';
import ReactDOM from 'react-dom';

//import 'antd/dist/antd.css';
import Routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import siteStyle from "./style/site.css"
import profileStyle from "./style/profile.css"
import postsStyle from "./style/post.css"
import headerStyle from  "./style/header.css"
import aboutStyle from "./style/about.css"
import menuStyle from  "./style/menu.css"
import notificationsStyle from  "./style/notifications.css"
import submitStyle from  "./style/submit.css"
import commentsStyle from  "./style/comments.css"
import productsStyle from "./style/catalogue.css"
import productView from "./style/productView.css"
import $ from "jquery";
import { findDOMNode } from "react-dom";
import YouTube from 'react-youtube';
//import updateView from "./style/update.css"


const App = () => (
  
    <Routes />
)

ReactDOM.render(<App />, document.getElementById('root'));










