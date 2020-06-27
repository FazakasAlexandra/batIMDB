import React from 'react'
import MovieCard from '../../../Components/MovieCard/MovieCard'
import MovieList from '../CategoriesLists/MovieList/MovieList';
import axios from 'axios'
import './CategoriesLists.css'

class CategoriesLists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieListMovies: [],
            seriesListMovies: [],
            gameListMovies: []
        }
    }

    componentDidMount() {
        this.getMovieListMovies();
        this.getSeriesListMovies();
        this.getGameListMovies();
    }

    getMovieListMovies = (type) => {
        axios.get(`http://ancient-caverns-16784.herokuapp.com/movies?Type=movie&take=12`)
            .then((response) => {
                // console.log(response.data.results)
                this.setState({
                    movieListMovies: response.data.results,
                    // seriesListMovies: response.data.results ,
                    // gameListMovies: response.data.results 
                })
            }
            )
    }
    getSeriesListMovies = () => {
        axios.get(`http://ancient-caverns-16784.herokuapp.com/movies?Type=series&take=12`)
            .then((response) => {
                // console.log(response.data.results)
                this.setState({ seriesListMovies: response.data.results })
            }
            )
    }
    getGameListMovies = () => {
        axios.get(`http://ancient-caverns-16784.herokuapp.com/movies?Type=game&take=12`)
            .then((response) => {
                // console.log(response.data.results)
                this.setState({ gameListMovies: response.data.results })
            }
            )
    }
    // displayMovie() {
    //     let { movieListMovies } = this.state
    //     let movies = movieListMovies.map(movie => {
    //         return (<MovieCard
    //             key={movie._id}
    //             poster={movie.Poster}
    //             title={movie.Title}
    //             imdbRating={movie.imdbRating}
    //         />)
    //     })
    //     return movies;
    // }
    // displaySerie() {
    //     let { seriesListMovies } = this.state
    //     let series = seriesListMovies.map(movie => {
    //         return (<MovieCard
    //             key={movie._id}
    //             poster={movie.Poster}
    //             title={movie.Title}
    //             imdbRating={movie.imdbRating}
    //         />)
    //     })
    //     return series;
    // }
    // displayGame() {
    //     let { gameListMovies } = this.state
    //     let games = gameListMovies.map(movie => {
    //         return (<MovieCard
    //             key={movie._id}
    //             poster={movie.Poster}
    //             title={movie.Title}
    //             imdbRating={movie.imdbRating}
    //         />)
    //     })
    //     return games;
    // }

    render() {
        return (
            /*  <div className="categoriesList-container">
                 <h1>Movies</h1>
                 <div className="categoriesList movieListMovies ">
                     {this.displayMovie()} 
                 </div>
                 <h1>Series</h1>
                 <div className="categoriesList seriesListMovies">
                     {this.displaySerie()}   
                 </div>
                 <h1>Game</h1>
                 <div className="categoriesList gameListMovies">
                      {this.displayGame()}   
                 </div>
             </div> */
            <div style={{ width: "90%" }}>
                <h1>Movies</h1>
                <div  >
                    <MovieList movies={this.state.movieListMovies} />
                </div>
                <h1>Series</h1>
                <div >
                    <MovieList movies={this.state.seriesListMovies} />
                </div>
                <h1>Game</h1>
                <div >
                    <MovieList movies={this.state.gameListMovies} />
                </div>
            </div>
        )
    }
}

export default CategoriesLists
