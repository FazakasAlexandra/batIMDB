import React from 'react';
import { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './MovieCard.css';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

class MovieCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false,
            movieDetail : {}
        }
    }
    //logic for log/reg invitation
    handleHover = () => {
        this.setState({ hover: true })
    }
    handleMouseLeave = () => {
        this.setState({ hover: false })
    }
    
    

    getMovieDetails = () => {
        Axios.get(`http://movies-app-siit.herokuapp.com/movies/${this.props.id}`)
        .then((response) => {
            this.setState({movieDetail : response.data},() => {
                this.movieDetails()
            })
        })
    }

    editMovie = () => {
        this.props.history.push(
            {
                pathname: `/editPage/${this.props.id}`,
            }
        );
     }
     movieViewDetails = () =>{
        this.props.history.push(
            {
                pathname: `/movieDetails/${this.props.id}`,
            }
        );
     }
    //  movieDetails = () => {
    //     this.props.history.push(
    //         {
    //             pathname: `/MovieDetails/${this.props.id}`,
    //         }
    //     );
    //  }
     
     movieDetails = () => {
        let {movieDetail} = this.state
        this.props.history.push(
            {
                pathname: `/movieDetails/${this.props.id}`,
                state: {
                    imdbID: movieDetail.imdbID,
                    id: movieDetail._id,
                    title: movieDetail.Title,
                    runtime: movieDetail.Runtime,
                    imdbRating: movieDetail.imdbRating,
                    year: movieDetail.Year,
                    plot: movieDetail.Plot,
                    awards: movieDetail.Awards,
                    director: movieDetail.Director,
                    actors: movieDetail.Actors,
                    released: movieDetail.Released,
                    genre: movieDetail.Genre,
                    poster: movieDetail.Poster,
                    language: movieDetail.Language,
                    country: movieDetail.Country
                }
            }
        );
    }
    
    render(){
        const { poster, title, imdbRating } = this.props;
        return (
            <div 
                className='movieCard'
                style={{backgroundColor: this.props.theme.colorBackground.nav}}
                >
                {/* <img src={ poster } alt="movie poster" className='cardImg' /> */}
                <div style={{backgroundImage: "url(" + poster + ")"}} className='cardImg' />
                <p className='cardTitle'>{ title }</p>
                <div className ='ratingsWrapper'>
                    <FontAwesomeIcon icon={faStar} className="star"/>
                    <span className='cardRating'> { imdbRating }</span>
                </div>

                {!this.state.hover && !this.props.auth &&
                    <div className='closedCardInvite'
                         onMouseEnter = {this.handleHover}>
                    </div>
                }
                {this.state.hover && !this.props.auth &&
                    <div className='openCardInvite'
                         onMouseLeave = {this.handleMouseLeave}>
                        <p className='inCardInvite'>login / register to edit</p>
                    </div>
                }
                {this.props.auth &&
                    <button className='editBtn'onClick={this.editMovie}>EDIT</button>
                }
                <button className ='movieDetailsButn' onClick={this.getMovieDetails}>VIEW </button>
            </div>
        )
    }

}
// export default MovieCard
export default withTheme(withRouter(MovieCard));