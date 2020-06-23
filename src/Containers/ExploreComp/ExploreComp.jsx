import React from 'react'
import { MoviesFiltersBar } from './MoviesFiltersBar/MoviesFiltersBar'
import MovieCard from '../../Components/MovieCard/MovieCard'
import './ExploreComp.css'
import Axios from 'axios'

export class ExploreComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            moviesList: [],
        }
    }

    addImage(response){
        let movies = response.data.results.map((movie) => {
            if(movie.Poster === 'N/A'){
                movie.Poster = 'https://static1.funidelia.com/474157-f6_big2/costum-batman-the-brave-and-the-bold.jpg'
            }
            return movie
        })
        return movies
    }

    componentDidMount() {
        Axios.get(`http://ancient-caverns-16784.herokuapp.com/movies?take=15`)
        .then((response) => {
            //console.log(response.data.results)
            let movies = this.addImage(response)
            this.setState({ moviesList: movies })
        }
        )
    }

    getSearchedMovies(){
        if(localStorage.getItem('search')){
            let search = localStorage.getItem('search')
            localStorage.removeItem('search')
            this.getMovies('Title', search)
        }
    }

    getMovies(filterClass, filter) {
        // for seach bar : filterClass = title, filter = input.value of seach input field
        console.log(filterClass, filter)
        Axios.get(`http://ancient-caverns-16784.herokuapp.com/movies?${filterClass}=${filter}`)
            .then((response) => {
                let movies = this.addImage(response)
                this.setState({ moviesList: movies })
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
            <div className="exploreComp-container">
                <MoviesFiltersBar
                    filter={(filterClass, filter) => this.getMovies(filterClass, filter)}
                />
                <div className="filtered-movies-container">
                    {this.displayMovies()}
                    {this.getSearchedMovies()}
                </div>
            </div>
        )
    }
}