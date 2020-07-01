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
                country:''
        }
    }

    // getMoviesDetails = () => {
    //     Axios.get(`http://movies-app-siit.herokuapp.com/movies/${this.props.id}`)
    //     .then((response) => {
    //         this.setState({movieDetail : response.data},() => {
    //             // this.editMovie()
    //             this.movieDetailsFunction()
    //         })
    //     })
    // }
    // movieDetailsFunction = () => {
    //     let {movieDetail} = this.state
    //     this.props.history.push(
    //         {
    //             pathname: '/movieDetails',
    //             state: {
    //                 id: movieDetail._id,
    //                 title: movieDetail.Title,
    //                 runtime: movieDetail.Runtime,
    //                 imdbRating: movieDetail.imdbRating,
    //                 year: movieDetail.Year,
    //                 plot: movieDetail.Plot,
    //                 awards: movieDetail.Awards,
    //                 director: movieDetail.Director,
    //                 actors: movieDetail.Actors,
    //                 released: movieDetail.Released,
    //                 genre: movieDetail.Genre,
    //                 poster: movieDetail.Poster,
    //                 language: movieDetail.Language,
    //                 country: movieDetail.Country
    //             }
    //         }
    //     );
    // }
    editMovie = () => {
        this.props.history.push(
            {
                pathname: `/editPage/${this.props.id}`,
            }
        );
     }

    // editMovie = () => {
    //    console.log('edit Movie',this.props)
    //     this.props.history.push(
    //         {
    //             pathname: '/editMovie',
    //             state: this.props
    //         }
    //     );
        
    // }

    componentDidMount(){
            let id = this.props.history.location.state
            Axios.get(`https://ancient-caverns-16784.herokuapp.com/movies/${id}`)
            .then((response)=>{
                console.log(response.data)
                this.setState({movieDetails : response.data}, ()=>{
                    console.log(this.state.movieDetails)
                })
            })
    }

    render() {
        const { poster, title, genre, year, runtime, imdbRating, language, country, director, actors, released, awards, plot } = this.props.history.location.state
        return (
            <div 
                className="movieDetails-container"
                style={{backgroundColor: this.props.theme.colorBackground.primary }}
                >
                <div className="movieDetailsImg">
                    <img src={poster} alt="movie poster" className='detailsImg' /><br />
                    <div className='trailer'>
                        <RespPlayer id={this.props.history.location.state}/>
                    </div>
                    
                </div>
                <div className="movieDetailsInfo" >
                    <p className="infoTitle"><b>Title:</b> {title}</p><br/>
                    <p className="infoGenre"><b>Genre:</b> {genre}</p><br/>
                    <p className="infoYear"><b>Year:</b>  {year}</p><br/>
                    <p className="infoRuntime"><b>Runtime:</b> {runtime}</p><br/>
                    <p className="infoImdbRating"><b>ImdbRating:</b> {imdbRating}</p><br/>
                    <p className="infoLanguage"><b>Language:</b> {language}</p><br/>
                    <p className="infoCountry"><b>Country:</b> {country}</p><br/>
                    <p className="infoDirector"><b>Director:</b> {director}</p><br/>
                    <p className="infoActors"><b>Actors:</b> {actors}</p><br/>
                    <p className="infoRelease"><b>Released:</b> {released}</p><br/>
                    <p className="infoAwards"><b>Awards:</b> {awards}</p><br/>
                    <br />
                    <p className="infoPlot"><i>{plot}</i> </p><br/>
                    <br /><br/>
                    <div className="movieDetails-buttons">
                        <button className="editMovie" onClick={this.editMovie}>Edit Movie</button><br />
                        <button className="deleteMovie">Delete Movie</button>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default withTheme(withRouter(MovieDetails))