import React, { Component } from 'react';


class IframeComp extends Component {
    render() {
        return (
            <div>
                <iframe
                    // vine pe resp la al doilea fetch
                    // response.data.linkEmbed  "https://www.imdb.com/video/imdb/vi1946858521/imdb/embed?autoplay=false&width=480"
                    /* src="https://www.imdb.com/video/imdb/vi1946858521/imdb/embed?autoplay=false&width=480" */
                    src={this.props.movieLink}
                    width={this.props.width}
                    height={this.props.height}
                    allowFullScreen={this.props.allowFullScreen}
                    mozallowfullscreen={this.props.mozallowfullscreen}
                    webkitallowfullscreen={this.props.webkitallowfullscreen}
                    frameBorder={this.props.frameBorder}
                    scrolling={this.props.scrolling}>
                </iframe>
            </div>
        )
    }
}

export default IframeComp;