import React from 'react'


export class MovieDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="movieDetails-cantainer">
                <div className="movieDetails-left" onclick={this.props.closeMoviedetails}>
                    <i className="fas fa-arrow-left"></i>
                    <span style={{ marginLeft: 10 }}>Go Back</span>
                </div>
                <div className="movieDetails-img">{this.props.currentMovie.Poster}</div>
                <div className="movieDetails-right">
                    <p>{this.props.currentMovie.Title}</p>
                    <p>{this.props.currentMovie.Genre}</p>
                    <p>{this.props.currentMovie.Year}</p>
                    <p>{this.props.currentMovie.Plot}</p>
                    <button className="editMovie">Edit Movie</button>
                </div>

            </div>
        )
    }
}