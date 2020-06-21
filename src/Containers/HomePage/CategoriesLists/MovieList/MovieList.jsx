import React from 'react'
import MovieCard from '../../../../Components/MovieCard/MovieCard'
import axios from 'axios'
import './MovieList.css'

export class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            moviesList: []
        }
    }
    componentDidMount() {
        axios.get(`http://ancient-caverns-16784.herokuapp.com/movies?Type=movie&take=18`)
            .then((response) => {
                console.log(response.data.results)
                this.setState({ moviesList: response.data.results })
            }
            )
    }
    displayMovies() {
        let { moviesList } = this.state
        let movies = moviesList.map(movie => {
            return (<MovieCard
                key={movie._id}
                poster={movie.Poster}
                title={movie.Title}
                imdbRating={movie.imdbRating}
            />)
        })

        return movies
    }

    render() {
        return (
                <div className='moviesList-container'>
                    {this.displayMovies()}
                </div>
            
        )
    }
}

