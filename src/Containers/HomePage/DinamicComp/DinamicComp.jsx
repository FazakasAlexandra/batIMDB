import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import SingleMovie from '../DinamicComp/SingleMovie/SingleMovie';
import "./DinamicComp.css";

class DinamicComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        axios.get('https://movies-app-siit.herokuapp.com/movies?take=3&skip=0').then(response => {
            /* this.setState({ movies: response.data.results }) */  //am comentat-o sa nu va incurce cand randati
            console.log(response)
            console.log(this.state.movies)
        })
    }

    render() {
        let movies = this.state.movies.map(movie => {
            return (
                <SingleMovie
                    title={movie.Title}
                    key={movie._id}
                    year={movie.Year}
                    poster={movie.Poster}
                    runtime={movie.Runtime}
                />
            )
        })

        return (
            <div className="DinamicCompMovies">
                <div className="DinamicCompMoviesList">
                    {movies}
                </div>
                <img src={this.state.movies.length? this.state.movies[0].Poster :''} />
            </div>
        )
    }
}

export default withRouter(DinamicComp);