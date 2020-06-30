import React from 'react';

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
            console.log('response.data :---- ',response.data)
            this.setState({movieDetail : response.data},() => {
                this.editMovie()
            })
           
        })
    }

    editMovie = () => {
        // console.log('edit button',this.props)
        //console.log('edit button', this.props)
        //console.log(this.state.movieDetail)
        let {movieDetail} = this.state
        this.props.history.push(
            {
                pathname: '/editPage',
                state: {
                    auth: movieDetail.Auth,
                    key: movieDetail._id,
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
                },
            }
        );
     }
     
     movieDetailsFunction = () => {
        this.props.history.push(
            {
                pathname: '/movieDetails',
                state: this.props.imdbID
            }
        );
    }

    render(){
        const { poster, title, imdbRating } = this.props;
        return (
            <div className='movieCard'>
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
                    //<button className='editBtn'onClick={this.editMovie}>EDIT</button>
                    <button className='editBtn'onClick={this.getMovieDetails}>EDIT</button>
                }
                <button className ='movieDetailsButn' onClick={this.movieDetailsFunction}>VIEW </button>
            </div>
        )
    }

}
// export default MovieCard
export default withRouter(MovieCard)