import React, { Component } from 'react';
import "./MovieItem.css";

class MovieItem extends Component {

    render() {
        return (
            <div className="MovieItem">
                <img className="DinamicSingleMovieImg" src={this.props.poster} />
            </div>
        )
    }
}

export default MovieItem;