import React from 'react'
import Menus from './MoviesFiltersBar/Menus'
import MovieCard from '../../Components/MovieCard/MovieCard'
import { withTheme } from 'styled-components';
import './ExploreComp.css'
import Axios from 'axios'

class ExploreComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            moviesDetailsList: [],
            moviesList: [],
            moviesFound: true,
        }
    }

    addImage(response) {
        let movies = response.data.results.map((movie) => {
            if (movie.Poster === 'N/A') {
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
                let moviesIds = movies.map((movie) => {
                    return movie._id
                })
            })
    }

    getMovies(query) {
        // for seach bar : filterClass = title, filter = input.value of seach input field
        Axios.get(`http://ancient-caverns-16784.herokuapp.com/movies?${query}`)
            .then((response) => {
                let movies = this.addImage(response)
                this.setState({ moviesList: movies }, () => {
                    if (this.state.moviesList.length < 1) {
                        this.setState({ moviesFound: false })
                    } else {
                        this.setState({ moviesFound: true })
                    }
                })
            }
            )
    }

    getSearchedMovies() {
        if (localStorage.getItem('search')) {
            let search = localStorage.getItem('search')
            localStorage.removeItem('search')
            let query = ['Title=',search]
            query.join("")
            this.getMovies(query)
        }
    }

    displayNotFound() {
        return (
            <>
                <div>
                    <img src="https://image.flaticon.com/icons/svg/1178/1178479.svg" style={{ width: '10rem', height: '11rem' }} alt="not found" />
                </div>
            </>
        )
    }

    displayMovies() {
        const { auth, token } = this.props;
        let { moviesList } = this.state
        //console.log(movieDetailsList)
        let movies = moviesList.map(movie => {
            // console.log('key din displayMovies',movie._id)
            return (<MovieCard
                key={movie._id}
                id={movie._id}

                // auth={this.state.auth}

                poster={movie.Poster}
                title={movie.Title}
                imdbRating={movie.imdbRating}
                auth={auth}
                token={token}
            />)
        })

        return movies
    }

    render() {
        return (
            <div className="exploreComp-container"
                style={{ backgroundColor: this.props.theme.colorBackground.primary }}
            >
                <Menus
                    filter={(query) => this.getMovies(query)}
                />
                <div className="filtered-movies-container">
                    {this.state.moviesFound ? this.displayMovies() : this.displayNotFound()}
                    {this.getSearchedMovies()}
                </div>
            </div>
        )
    }
}

export default withTheme(ExploreComp)