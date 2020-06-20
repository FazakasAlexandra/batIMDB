import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import RotateList from 'react-rotate-list';
import SingleMovie from '../DinamicComp/SingleMovie/SingleMovie';
import "./DinamicComp.css";

class DinamicComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            pic: ''
        }
    }

    componentDidMount() {
        this.getMovies();
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    getMovies = () => {
        axios.get('https://movies-app-siit.herokuapp.com/movies?take=6&skip=0').then(response => {
            this.setState({ movies: response.data.results })  //am comentat-o sa nu va incurce cand randati
            console.log(response)
            console.log(this.state.movies)
        })
    }

    renderPic = () => {
        if (this.state.movies.length) {
            let render = true;
            while (render) {
                for (let i = 0; i < this.state.movies.length; i++) {
                    this.setState({
                        pic: this.state.movies[i].Poster
                    })
                }
            }
        }
    }

    render() {
        let movies = this.state.movies.map((movie, idx) => {
            this.poster = movie.Poster
            return (
                <SingleMovie
                    title={movie.Title}
                    key={movie._id}
                    year={movie.Year}
                    poster={movie.Poster}
                    runtime={movie.Runtime}
                    index={idx}
                />
            )
        })
        return (
            <div className="DinamicCompMovies">
                <div className="DinamicCompMoviesList">
                    <RotateList height={550}>
                        {movies}
                    </RotateList>
                </div>
                <div className="DinamicCompMoviesTest">
                    <img src={this.state.movies.length ? this.state.movies[1].Poster : ''} />
                </div>

            </div>
        )
    }
}

export default withRouter(DinamicComp);