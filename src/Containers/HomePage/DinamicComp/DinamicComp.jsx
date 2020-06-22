import React, { Component } from 'react';
import axios from 'axios';
import RotateList from 'react-rotate-list';
/* import styled from 'styled-components';
import Bounce from '../../../Theme/Styledcomponents/Bounce'; */
import Flash from '../../../Theme/Styledcomponents/Flash';
import SingleMovie from '../DinamicComp/SingleMovie/SingleMovie';
import "./DinamicComp.css";
import { Fragment } from 'react';
import Picture from './Picture/Picture';

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
    }

    getMovies = () => {
        axios.get('https://movies-app-siit.herokuapp.com/movies?take=10&skip=0').then(response => {
            this.setState({
                movies: response.data.results,
            })  //am comentat-o sa nu va incurce cand randati
            /* console.log(response) */
            
        })
    }

    renderPic =()=> {
        if(this.state.pics.length) {
            return (
                <Picture 
                picturesArray={this.state.pics} 
                key={this.state.movies._id} 
                />
            )
        }
    }

    render() {
        /* console.log('lista refreshhh', this.state.movies.length) */
        let movies = this.state.movies.map((movie, idx) => {
            this.state.pics.push(movie.Poster)
            return (
                <SingleMovie
                    title={movie.Title}
                    key={movie._id}
                    year={movie.Year}
                    poster={movie.Poster}
                    runtime={movie.Runtime}
                    index={idx}
                    imdbID={movie.imdbID}
                    imdbRating={movie.imdbRating}
                />
            )
        });
        
        return (
            <Fragment>
                <Flash><h1 style={{color: "grey"}}>Best 10 Batman movies</h1></Flash>
                <div className="DinamicCompMovies">
                    <div className="DinamicCompMoviesList">
                        <RotateList height={550} autoplay={true} duration={900} delay={5000}>
                            { movies }
                        </RotateList>
                    </div>
                    <div className="DinamicCompMoviesPicture">
                        {this.renderPic()} 
                    </div>                
                </div>                
            </Fragment>
        )
    }
}

export default DinamicComp;