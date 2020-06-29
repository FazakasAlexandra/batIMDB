import React from 'react';
import './MovieDetails.css';
import { withRouter } from 'react-router-dom';
import RespPlayer from '../HomePage/DinamicComp/RespPlayer/RespPlayer';


class MovieDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    editMovie = () => {
       // console.log('edit button',this.props)
        
        // this.props.history.push('/editMovie');
        this.props.history.push(
            {
                pathname: '/editPage',
                state: this.props._id
            }
        );
        
    }

    render() {
        const { poster, title, genre, year, runtime, language, country, director, actors, released, awards, plot } = this.props
        return (
            <div className="movieDetails-container">
                <div className="movieDetailsImg">
                    <img src={poster} alt="movie poster" className='detailsImg' /><br />
                    <div className="movieDetails-buttons">
                        <button className="editMovie" onClick={this.editMovie}>Edit Movie</button><br />
                        <button className="deleteMovie">Delete Movie</button>
                    </div>
                </div>
                <div className="movieDetailsInfo" >
                    <p className="infoTitle">Title: {title}</p>
                    <p className="infoGenre">Genre: {genre}</p>
                    <p className="infoYear">Year: {year}</p>
                    <p className="infoRuntime">Runtime: {runtime}</p>
                    <p className="infoLanguage">Language: {language}</p>
                    <p className="infoCountry">Country: {country}</p>
                    <p className="infoDirector">Director: {director}</p>
                    <p className="infoActors">Actors: {actors}</p>
                    <p className="infoRelease">Released: {released}</p>
                    <p className="infoAwards">Awards: {awards}</p>
                    <br />
                    <p className="infoPlot">{plot}</p>
                    <br /><br />
                    <div className='trailer'>
                        <RespPlayer id={this.props.history.location.state}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MovieDetails)