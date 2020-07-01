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
    
    // getMovieDetails = () => {
    //     this.editMovie()
    //     // Axios.get(`http://movies-app-siit.herokuapp.com/movies/${this.props.id}`)
    //     // .then((response) => {
    //     //     console.log('response.data :---- ',response.data)
    //     //     this.setState({movieDetail : response.data},() => {
    //     //         this.editMovie()
    //     //     })
           
    //     // })
    // }

    editMovie = () => {
        this.props.history.push(
            {
                pathname: `/editPage/${this.props.id}`,
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
                <button className ='movieDetailsButn' onClick={this.movieDetailsFunction}>VIEW </button>
            </div>
        )
    }

}
// export default MovieCard
export default withTheme(withRouter(MovieCard));