import React, { Component } from 'react';
/* import { withRouter } from 'react-router-dom'; */
import axios from 'axios';
import RotateList from 'react-rotate-list';
import styled from 'styled-components';
import Bounce from '../../../Theme/Styledcomponents/Bounce';
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

        console.log('mounted again',)        
    }

    getMovies = () => {
        axios.get('https://movies-app-siit.herokuapp.com/movies?take=20&skip=0').then(response => {
            this.setState({
                movies: response.data.results,
            })  //am comentat-o sa nu va incurce cand randati
            console.log(response)
            
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
        console.log('lista refreshhh', this.state.movies.length)
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
                />
            )
        });
        
        return (
            <Fragment>
                <Bounce><h1 style={{color: "yellow"}}>Batman forever</h1></Bounce>
                <div className="DinamicCompMovies">
                    <div className="DinamicCompMoviesList">
                        <RotateList height={550} autoplay={true} duration={900} delay={5000}>
                            {this.state.movies.length? movies :''}
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