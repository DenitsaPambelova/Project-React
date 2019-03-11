import React from 'react';

import NavBar from '../components/Navbar.jsx';
import Footer from '../components/footer.jsx';
import YouTube from 'react-youtube';



export default class Home extends React.Component{
    
    
    render()  {
        
        const opts = {
            height: '400',
            width: '620',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        return(
        <div>
            <NavBar/>
            <center>
                <p id="paragraph">World of Yoga is a mini yoga shop. If you don't have an account, please register. Login to see our products. Enjoy the music for your personal yoga practice.
                </p>
            </center>
            <center><div id="YouTubeHolder">
                <YouTube
                    videoId="hlWiI4xVXKY"
                    opts={opts}
                    onReady={this._onReady}
                />

            </div></center>





        </div>


        );
    }
}
    
    
    
    
    