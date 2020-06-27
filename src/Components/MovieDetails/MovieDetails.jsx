import React from 'react'
import './Moviedetails.css'


class MovieDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { poster, title, genre, year, plot } = this.props
        return (
            <div className="movieDetails-container">
                <div className="movieDetailsImg">
                    <img src={poster} alt="movie poster" className='detailsImg' />
                </div>
                <div className="movieDetailsInfo">
                    <p className="infoTitle">Title: {title}</p>
                    <p className="infoGenre">Genre: {genre}</p>
                    <p className= "infoYear">Year: {year}</p>
                    <br/>
                    <p className="infoPlot">{plot}</p>
                    <br/><br/>
                    <button className="closeMovieDetails">Close</button>
                    <button className="editMovie">Edit Movie</button>
                </div>


            </div>
        )
    }
}

export default MovieDetails