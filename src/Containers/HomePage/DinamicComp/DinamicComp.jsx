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
            pics: []
        }
    }

    componentDidMount() {
        this.getMovies();
        if (this.state.movies.length) {
            this.renderPic()
        }
    }

    getMovies = () => {
        axios.get('https://movies-app-siit.herokuapp.com/movies?take=6&skip=0').then(response => {
            this.setState({
                movies: response.data.results,
            })  //am comentat-o sa nu va incurce cand randati
            console.log(response)
            console.log(this.state.movies)
        })
    }

    render() {
        console.log('lista refreshhh')
        let movies = this.state.movies.map((movie, idx) => {
            this.state.pics.push(movie.Poster)
            console.log('lista pics', this.state.pics)
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
        });
        let pic = this.state.pics.map(pic => {
            return (
                <img src={pic} />
            )
        });
        return (
            <div className="DinamicCompMovies">
                <div className="DinamicCompMoviesList">
                    <RotateList height={550} autoplay={true}>
                        {movies}
                    </RotateList>
                </div>
                <div className="DinamicCompMoviesTest">                    
                        <img src={this.state.movies.length ? this.state.movies[1].Poster : ''} />
                        {/* {pic} */}                   
                </div>
            </div>
        )
    }
}

export default withRouter(DinamicComp);