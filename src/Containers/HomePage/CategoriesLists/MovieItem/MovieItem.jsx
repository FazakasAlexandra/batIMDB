import React, { Component } from 'react';
import "./MovieItem.css";

class MovieItem extends Component {

    render() {
        const { poster, title, imdbRating } = this.props
        return (
            <div className="MovieItem">
                <img className="DinamicSingleMovieImg" 
                src={poster} alt="movie poster" />
                {/* <p> {title} </p>
                <p>Rating: {imdbRating}</p> */}
               
            </div>
        )
    }
}

export default MovieItem;