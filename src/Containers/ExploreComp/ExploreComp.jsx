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
        if(sessionStorage.getItem('activeQuery')){
            sessionStorage.removeItem('activeQuery')
        }
    }

    componentWillUnmount(){
        if(sessionStorage.getItem('activeQuery')){
            sessionStorage.removeItem('activeQuery')
        }
    }

    componentDidUpdate() {
        if (this.props.emptySearch && !sessionStorage.getItem('activeQuery')) {
            this.getDefaultMovies()
        } else if(this.props.emptySearch && sessionStorage.getItem('activeQuery')){
            this.filterMovies(sessionStorage.getItem('activeQuery'))
        }
    }

    getDefaultMovies(areFiltersOff) {
        // renderNotFound() should not get executed
        if (areFiltersOff) {
            this.setState({ moviesFound: true })
        }
        Axios.get(`http://ancient-caverns-16784.herokuapp.com/movies?take=15`)
            .then((response) => {
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

    filterMovies(query) {
        console.log(query)
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
        if (localStorage.getItem('search')) {
            if (sessionStorage.getItem('activeQuery')) {
                let activeQuery = sessionStorage.getItem('activeQuery')
                if (activeQuery.includes('Title')) {
                    // a) filter movies with activeQuery and title
                    // a) 1. replace previous title within activeQuery
                    this.filterMovies(this.processActiveQuery(true, activeQuery))
                } else {
                    // a) 2. add new title to activeQuery
                    this.filterMovies(this.processActiveQuery(false, activeQuery))
                }
            } else {
                // b) filter movies only by title
                this.getMoviesByTitle()
            }
        }
    }

    processActiveQuery(queryIncludesTitle, activeQuery) {
        let processedQuery = queryIncludesTitle ? this.replaceTitle(activeQuery) : this.addTitle(activeQuery)
        return processedQuery
    }

    addTitle(activeQuery){
        // add title to activeQuery
        let processedQuery = activeQuery.concat(`&${this.getTitleQuery()}`)
        this.updateActiveQuery(processedQuery)
        return processedQuery
    }

    replaceTitle(activeQuery) { 
        // remove previous title from activeQuery
        // add actual title to activeQuery
        let indexTitle = activeQuery.indexOf('Title')
        let indexAnd = activeQuery.indexOf('&', indexTitle)
        // case 1 : 'Genre=Comedy&Title=Joker&Language=English'
        // case 2 : 'Title=Joker&Genre=Comedy'
        if (indexAnd !== -1) {
            let oldTitle = activeQuery.slice(indexTitle, indexAnd+1)
            let processedQuery = activeQuery.replace(oldTitle,`${this.getTitleQuery()}&`)
            this.updateActiveQuery(processedQuery)

            return processedQuery
        // case 3 : 'Genre=Comedy&Title=Joker' 
        } else {
            let oldTitle = activeQuery.slice(indexTitle, activeQuery.length)
            let processedQuery = activeQuery.replace(oldTitle, this.getTitleQuery())
            this.updateActiveQuery(processedQuery)

            return processedQuery
        }
    }

    updateActiveQuery(processedQuery){
        sessionStorage.setItem('activeQuery', processedQuery)
    }
    getMoviesByTitle() {
        let titleQuery = this.getTitleQuery()
        this.filterMovies(titleQuery)
    }

    getTitleQuery() {
        let title = localStorage.getItem('search')
        let queryElements = ['Title=', title]
        let titleQuery = queryElements.join("")
        sessionStorage.setItem('titleQuery', titleQuery)
        localStorage.removeItem('search')

        return titleQuery
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
        let movies = this.state.moviesList.map(movie => {
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
                    filterMovies={(query) => this.filterMovies(query)}
                    getDefaultMovies={(areFiltersOff) => this.getDefaultMovies(areFiltersOff)}
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