import React, { Component } from 'react';
import IframeComp from '../RespPlayer/IframeComp/IframeComp';
import ReactPlayer from 'react-player'
import axios from 'axios';

class RespPlayer extends Component {
    state = {
        movieLink: '',
    }

    componentDidMount() {
        this.getTrailers();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.getTrailers();
        }
    }
    // rpdkey   a7107e836emsh1aafb634e89dfbcp1c0494jsnd0020a31fca0
    getTrailers = () => {
//        axios.get(`https://imdb-api.com/en/API/Trailer/k_P5lbxL5X/${this.props.id}`).then(response => {
//            console.log('TRAILERS', response)
//            this.setState({ movieLink: `${response.data.link /* linkEmbed */}` }) //?autoplay=true&width=480
//        })
          axios.get(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${this.props.id}`,  {
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                "x-rapidapi-key": "c7c583940dmsh38d7a680bed20c8p166242jsna2a60e066915",
            }})
            .then(response => {
                console.log(response);
                this.setState({ movieLink: `${response.data.trailer.link}` })
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        console.log('RespPlayer--> url', this.state.movieLink)
        return (
            <div>
                <ReactPlayer
                    url={this.state.movieLink}
                    controls={true}
                />
            </div>

            //      <iframe
            // vine pe resp la al doilea fetch
            // response.data.linkEmbed  "https://www.imdb.com/video/imdb/vi1946858521/imdb/embed?autoplay=false&width=480"
            // https://imdb-api.com/en/API/Trailer/k_P5lbxL5X/tt8752440
            /* src={this.state.movieLink}
            width="480"
            height="270"
            allowFullScreen={'true'}
            mozallowfullscreen={'true'}
            webkitallowfullscreen={'true'}
            frameBorder="no"
            scrolling="no"   >
        </iframe> */

            //<IframeComp
            // vine pe resp la al doilea fetch
            // response.data.linkEmbed  "https://www.imdb.com/video/imdb/vi1946858521/imdb/embed?autoplay=false&width=480"
            /* src="https://www.imdb.com/video/imdb/vi1946858521/imdb/embed?autoplay=false&width=480" */
            // https://www.imdb.com/video/imdb/vi783876377/imdb/embed?autoplay=false&width=480
            /*         src={this.state.movieLink}
                    width="480"
                    height="270"
                    allowFullScreen="true"
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    frameBorder="no"
                    scrolling="no"
                /> */
        )
    }
}

export default RespPlayer;

/*
    <iframe
        // vine pe resp la al doilea fetch
        // response.data.linkEmbed  "https://www.imdb.com/video/imdb/vi1946858521/imdb/embed?autoplay=false&width=480"
        src="https://www.imdb.com/video/imdb/vi1946858521/imdb/embed?autoplay=false&width=480"
        width="480"
        height="270"
        allowfullscreen="{true}"
        mozallowfullscreen="{true}"
        webkitallowfullscreen="{true}"
        frameborder="no"
        scrolling="no">
    </iframe>

    */