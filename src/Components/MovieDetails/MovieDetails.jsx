import React from 'react';
import './MovieDetails.css';
import { withRouter } from 'react-router-dom';


class MovieDetails extends React.Component {
    constructor(props) {
        super(props)
    }
    editMovie = () => {
        console.log('edit button', this.props)
        this.props.history.push('/editMovie');
        // this.props.history.push(
        //     {
        //         pathname: '/editMovie',
        //         state: this.props.location.pathname
        //     }
        // );
    }

    render() {
        const { poster, title, genre, year, release, runtime, director, actors, language, country, awards, plot } = this.props
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
                    <p className="infoRelease">Release: {release}</p>
                    <p className="infoRuntime">Runtime: {runtime}</p>
                    <p className="infoDirector">Director: {director}</p>
                    <p className="infoActors">Actors: {actors}</p>
                    <p className="infoLanguage">Language: {language}</p>
                    <p className="infoCountry">Country: {country}</p>
                    <p className="infoAwards">Awards: {awards}</p>
                    <br />
                    <p className="infoPlot">{plot}</p>
                    <br /><br />
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MovieDetails)