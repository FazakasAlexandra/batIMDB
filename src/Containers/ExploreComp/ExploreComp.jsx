import React from 'react'
import { MoviesFiltersBar } from './MoviesFiltersBar/MoviesFiltersBar'
import MovieCard from '../../Components/MovieCard/MovieCard'
import './ExploreComp.css'
import Axios from 'axios'

export class ExploreComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            moviesList: []
        }
    }

    getMovies(filterClass, filter) {
        // for seach bar : filterClass = title, filter = input.value of seach input field
        console.log(filterClass, filter)
        Axios.get(`http://ancient-caverns-16784.herokuapp.com/movies?${filterClass}=${filter}`)
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
                poster={movie.Poster}
                title={movie.Title}
                imdbRating={movie.imdbRating}
            />)
        })

        return movies
    }

    render() {
        return (
            <div className="exploreComp-container">
                <MoviesFiltersBar
                    filter={(filterClass, filter) => this.getMovies(filterClass, filter)}
                />
                <div className="filtered-movies-container">
                    {this.displayMovies()}
                </div>
            </div>
        )
    }
}