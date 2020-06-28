import React from 'react';
import './MovieDetails.css';
import { withRouter } from 'react-router-dom';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props)
    }
    editMovie = () => {
        console.log('edit button',this.props)
        this.props.history.push('/editPage');
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
                    <button className="editMovie" onClick={this.editMovie}>Edit Movie</button>
                    <button className="closeMovieDetails">Close</button>
                </div>


            </div>
        )
    }
}

export default withRouter(MovieDetails)