import React from 'react';
import './MovieDetails.css';
import { withRouter } from 'react-router-dom';
import { withTheme } from 'styled-components';
import RespPlayer from '../HomePage/DinamicComp/RespPlayer/RespPlayer';
import Axios from 'axios';


class MovieDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.key,
            title: '',
            runtime: '',
            imdbRating: '',
            year: '',
            plot: '',
            awards: '',
            director: '',
            actors: '',
            released: '',
            genre: '',
            poster: '',
            language: '',
            country: ''
        }
    }

    editMovie = () => {
        // console.log('this.props aici',this.props.location.state.id)
        this.props.history.push(
            {
                pathname: `/editPage/${this.props.location.state.id}`,
            }
        );
    }

    componentDidMount() {
        let id  = this.props.history.location.state
        Axios.get(`https://movies-app-siit.herokuapp.com/movies/${id}`)
            .then((response) => {
                console.log(response.data)
                this.setState({ movieDetails: response.data }, () => {
                   console.log(this.state.movieDetails)
                })
            })
    }

    closeDetails = () => {
        this.props.history.goBack();
    }

    render() {
        // const { auth, token, } = this.props;
        const { poster, title, genre, year, runtime, imdbRating, language, country, director, actors, released, awards, plot } = this.props.history.location.state
        return (
            <div
                className="movieDetails-container"
            // style={{backgroundColor: this.props.theme.colorBackground.primary }}
            >
                <div className="movieDetailsImg">
                    <img src={poster} alt="movie poster" className='detailsImg' /><br />
                    <div className='trailer'>
                        <RespPlayer id={this.props.history.location.state.imdbID} />
                    </div>

                </div>
                <div className="movieDetailsInfo" >
                    <p className="infoTitle"><b>Title:</b> {title}</p><br />
                    <p className="infoGenre"><b>Genre:</b> {genre}</p><br />
                    <p className="infoYear"><b>Year:</b>  {year}</p><br />
                    <p className="infoRuntime"><b>Runtime:</b> {runtime}</p><br />
                    <p className="infoImdbRating"><b>ImdbRating:</b> {imdbRating}</p><br />
                    <p className="infoLanguage"><b>Language:</b> {language}</p><br />
                    <p className="infoCountry"><b>Country:</b> {country}</p><br />
                    <p className="infoDirector"><b>Director:</b> {director}</p><br />
                    <p className="infoActors"><b>Actors:</b> {actors}</p><br />
                    <p className="infoRelease"><b>Released:</b> {released}</p><br />
                    <p className="infoAwards"><b>Awards:</b> {awards}</p><br />
                    <br />
                    <p className="infoPlot"><i>{plot}</i> </p><br />
                    <br /><br />
                    <div className="movieDetails-buttons">
                        <button className="editMovie" onClick={this.editMovie}>Edit Movie</button><br />
                        {/* <button className="deleteMovie">Delete Movie</button> */}
                        <button className="closeDetails" onClick={this.closeDetails}>X</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default withTheme(withRouter(MovieDetails))