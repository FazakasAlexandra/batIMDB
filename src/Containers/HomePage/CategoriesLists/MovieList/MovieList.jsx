/* import React from 'react'
import MovieCard from '../../../../Components/MovieCard/MovieCard'
import axios from 'axios'
import './MovieList.css'

export class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            moviesList: []
        }
    }
    componentDidMount() {
        axios.get(`http://ancient-caverns-16784.herokuapp.com/movies?Type=movie&take=18`)
            .then((response) => {
                console.log(response.data.results)
                this.setState({ moviesList: response.data.results })
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
            <div className='moviesList-container'>
                {this.displayMovies()}
            </div>

        )
    }
}
  */

import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import MovieItem from '../MovieItem/MovieItem';
import MovieCard from '../../../../Components/MovieCard/MovieCard'

class MovieList extends Component {
    constructor(props) {
        super(props)
        this.breakPoints = [
            { width: 1, itemsToShow: 1, itemsToScroll: 1 },
            { width: 460, itemsToShow: 2, itemsToScroll: 1 },
            { width: 708, itemsToShow: 3, itemsToScroll: 1 },
            { width: 908, itemsToShow: 4, itemsToScroll: 1 },


        ]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.movies !== this.props.movies) {
            this.setState()
            //console.log('componentDidUpdate', this.props.movies)
        }
    }

    render() {

        let movies = this.props.movies.map((movie, idx) => {
            return (
                // <MovieItem
                //     key={movie._id}
                //     poster={movie.Poster}
                //     title={movie.Title}
                //     imdbRating={movie.imdbRating}
                // />
                <MovieCard
                    key={movie._id}
                    poster={movie.Poster}
                    title={movie.Title}
                    imdbRating={movie.imdbRating}
                    imdbID={movie.imdbID}
                />
            )
        });


        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
            }} >
                <Carousel
                    breakPoints={this.breakPoints}
                    itemsToShow={4}
                    itemsToScroll={1}
                    initialFirstItem={4}
                    renderPagination={() => {
                        return (
                          <> </>
                        )
                      }}
                >
                    {movies}
                </Carousel>

            </div>
        )
    }
}
export default MovieList;
