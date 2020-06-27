import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './MovieCard.css';


class MovieCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            auth : sessionStorage.getItem('auth'),
            hover: false
        }
    }
    handleHover =() =>{
        this.setState({hover : true })
    }
    handleMouseLeave =() =>{
        this.setState({hover : false})
    }
    
    render(){
        const { poster, title, imdbRating } = this.props
        return (
            <div className='movieCard'>
                {/* <img src={ poster } alt="movie poster" className='cardImg' /> */}
                <div style={{backgroundImage: "url(" + poster + ")"}} className='cardImg' />
                <p className='cardTitle'>{ title }</p>
                <div className ='ratingsWrapper'>
                    <FontAwesomeIcon icon={faStar} className="star"/>
                    <span className='cardRating'> { imdbRating }</span>
                </div>
                <p className='ratingOption'><span>IMDB</span> | Rotten Tomatoes | Metacritic</p>
                
                {!this.state.hover && !this.state.auth &&
                    <div className='nextLevel'
                         onMouseEnter = {this.handleHover}>
                    </div>
                }
                {this.state.hover && !this.state.auth &&
                    <div className='openCardInvite'
                         onMouseLeave = {this.handleMouseLeave}>
                        <p className='inCardInvite'>login / register to edit</p>
                    </div>
                }
                {this.state.auth &&
                    <button className='editBtn'>EDIT</button>
                }
                <button className ='movieDetailsBtn'>VIEW </button>
            </div>
        )
    }
}
export default MovieCard
