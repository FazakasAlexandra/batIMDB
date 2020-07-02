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
            moviesList: [],
            moviesFound: true
        }
    }

    componentDidMount() {
        this.getDefaultMovies()
    }

    componentDidUpdate(){
        if(this.props.emptySearch) {
            this.getDefaultMovies()
        }
    }
    
    getDefaultMovies(){
        Axios.get(`http://ancient-caverns-16784.herokuapp.com/movies?take=15`)
        .then((response) => {
            //console.log(response.data.results)
            let movies = this.addImage(response)
            this.setState({ moviesList: movies })
        })
    }

    addImage(response) {
        let movies = response.data.results.map((movie) => {
            if (movie.Poster === 'N/A') {
                movie.Poster = 'https://static.posters.cz/image/750/postere/justice-league-batman-solo-i50997.jpg'
            }
            return movie
        })
        return movies
    }

    getSearchedMovies(query) {
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

    isSearchByTitle() {
         if(localStorage.getItem('search'))
                this.getMoviesByTitle()
    }

    getMoviesByTitle(){
        let title = localStorage.getItem('search')
        let queryElements = ['Title=', title]
        let titleQuery = queryElements.join("")
        console.log(titleQuery)
        sessionStorage.setItem('titleQuery', titleQuery)
        localStorage.removeItem('search')
        this.getSearchedMovies(titleQuery, true)
    }

    renderNotFound() {
        return (
            <>
                <div>
                    <img src="https://image.flaticon.com/icons/svg/1178/1178479.svg" style={{ width: '10rem', height: '11rem' }} alt="not found" />
                </div>
            </>
        )
    }

    renderMovies() {
        const { auth, token } = this.props;
        let movies =  this.state.moviesList.map(movie => {
            // console.log('key din displayMovies',movie._id)
            return (<MovieCard
                key={movie._id}
                id={movie._id}
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
                    filter={(query) => this.getSearchedMovies(query)}
                    getDefaultMovies={() => this.getDefaultMovies()}
                />
                <div className="filtered-movies-container">
                    {this.state.moviesFound ? this.renderMovies() : this.renderNotFound()}
                    {this.isSearchByTitle()}
                </div>
            </div>
        )
    }
}

export default withTheme(ExploreComp)