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
        this.getListMovies('movie');
        this.getListMovies('series');
        this.getListMovies('game');
    }

    getListMovies = (type) => {
        axios.get(`http://ancient-caverns-16784.herokuapp.com/movies?Type=${type}&take=12`)
            .then((response) => {
                //console.log(response.data.results)
                switch (type) {
                    case 'movie':
                        this.setState({
                            movieListMovies: response.data.results
                        })
                        break;
                    case 'series':
                        this.setState({
                            seriesListMovies: response.data.results
                        })
                        break;
                    case 'game':
                        this.setState({
                            gameListMovies: response.data.results
                        })
                        break;
                    default:
                        break;
                }

            }
            )
    }
    // getSeriesListMovies = () => {
    //     axios.get(`http://ancient-caverns-16784.herokuapp.com/movies?Type=series&take=12`)
    //         .then((response) => {
    //             // console.log(response.data.results)
    //             this.setState({ seriesListMovies: response.data.results })
    //         }
    //         )
    // }
    // getGameListMovies = () => {
    //     axios.get(`http://ancient-caverns-16784.herokuapp.com/movies?Type=game&take=12`)
    //         .then((response) => {
    //             // console.log(response.data.results)
    //             this.setState({ gameListMovies: response.data.results })
    //         }
    //         )
    // }
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
            <div style={{ width: "98%" }}>
                <h1>Movies</h1><br/>
                <div  >
                    <MovieList movies={this.state.movieListMovies} />
                </div>
                <h1>Series</h1><br/>
                <div >
                    <MovieList movies={this.state.seriesListMovies} />
                </div>
                <h1>Game</h1><br/>
                <div >
                    <MovieList movies={this.state.gameListMovies} />
                </div>
            </div>
        )
    }
}

export default CategoriesLists
