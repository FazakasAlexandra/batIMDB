import React, { Component } from 'react';
import "./MovieItem.css";

class MovieItem extends Component {

    render() {
        const { poster, title, imdbRating } = this.props
        return (
            <div className='movieItem'>
                <img src={poster} alt="movie poster" className='movieImg' />
                <p className='movieTitle'>{title}</p>
                <p className='movieRating'>RATING: {imdbRating}</p>
                <div className='nextLevel'></div>
                <button className='movieDetailsBtn'>VIEW </button>
            </div>
        )
    }
}

export default MovieItem;