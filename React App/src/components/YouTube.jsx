import React from 'react';
import YouTube from 'react-youtube';

export default class Example extends React.Component {
    render() {
        const opts = {
            height: '390',
            width: '840',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (



            <YouTube
                videoId="hlWiI4xVXKY"
                opts={opts}
                onReady={this._onReady}
            />


        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}