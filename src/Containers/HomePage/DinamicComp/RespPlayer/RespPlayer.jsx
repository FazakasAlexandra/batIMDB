import React, { Component } from 'react';
import IframeResizer from 'iframe-resizer-react'
import axios from 'axios';
const url1 = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/';

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

    getTrailers = () => {
        axios.get(`${url1}${this.props.id}`, {
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                "x-rapidapi-key": "a7107e836emsh1aafb634e89dfbcp1c0494jsnd0020a31fca0",
            }
        })
            .then(response => {
                console.log(response);
                this.setState({ movieLink: response.data.trailer.id })
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        console.log('RespPlayer--> url', this.state.movieLink)
        return (
            <IframeResizer
                log
                src={`https://www.imdb.com/videoembed/${this.state.movieLink}`}
                style={{ minWidth: '90%', height: '720px', maxHeight: '100%' }}
            />

        )
    }
}

export default RespPlayer;