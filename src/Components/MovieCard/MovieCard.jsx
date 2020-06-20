import React from 'react';
import './MovieCard.css';


class MovieCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const { poster, title, imdbRating } = this.props
        return (
            <div className='movieCard'>
                <img src={ poster } alt="movie poster" className='cardImg' />
                <p className='cardTitle'>{ title }</p>
                <p className='cardRating'>RATING: { imdbRating }</p>
                <div className='nextLevel'></div>
                <button className ='movieDetailsBtn'>VIEW </button>
            </div>
        )
    }
}
export default MovieCard
