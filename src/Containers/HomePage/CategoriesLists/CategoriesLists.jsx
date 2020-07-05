import React from 'react'
import MovieCard from '../../../Components/MovieCard/MovieCard'
import MovieList from '../CategoriesLists/MovieList/MovieList';
import { withTheme } from 'styled-components';
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
        axios.get(`http://movies-app-siit.herokuapp.com/movies?Type=${type}&take=12`)
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


    render() {
        const {auth, token} = this.props;

        return (
            <div style={{ width: "98%" }}>
                <h1 style={{ color: this.props.theme.fontColor.secondary }}>MOVIES</h1><br />
                <div  >
                    <MovieList
                        // types='movies'
                        movies={this.state.movieListMovies}
                        auth={auth}
                        token={token}
                    />
                </div>
                <h1 style={{ color: this.props.theme.fontColor.secondary }}>SERIES</h1><br />
                <div >
                    <MovieList 
                        movies={this.state.seriesListMovies}
                        auth={auth}
                        token={token}
                    />
                </div>
                <h1 style={{ color: this.props.theme.fontColor.secondary }}>GAMES</h1><br />
                <div >
                    <MovieList 
                        movies={this.state.gameListMovies}
                        auth={auth}
                        token={token}
                    />
                </div>
            </div>
        )
    }
}

export default withTheme(CategoriesLists);
