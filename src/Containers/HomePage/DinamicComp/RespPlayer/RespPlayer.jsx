import React, { Component } from 'react';

class RespPlayer extends Component {
    render() {
        return (
            <iframe
                // vine pe resp la al doilea fetch
                // response.data.linkEmbed  "https://www.imdb.com/video/imdb/vi1946858521/imdb/embed?autoplay=false&width=480"
                /* src="https://www.imdb.com/video/imdb/vi1946858521/imdb/embed?autoplay=false&width=480" */
                src={`${this.props.url}?autoplay=false&width=480`}
                width="480"
                height="270"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                frameborder="no"
                scrolling="no">
            </iframe>
        )
    }
}

export default RespPlayer;