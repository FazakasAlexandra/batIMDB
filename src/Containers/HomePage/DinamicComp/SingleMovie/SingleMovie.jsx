import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import ImdbRating from '../ImdbRating/ImdbRating';
import "./SingleMovie.css";


class SingleMovie extends Component {
    render() {
        return (
            <div className="DinamicSingleMovie">
                <a onClick={()=> this.props.functionModal(this.props.imdbID)} >
                    <img className="DinamicSingleMovieImg" src={this.props.poster} />
                </a>                
                <div className="DinamicInfo">
                    <p>{this.props.runtime}</p>
                    <p>{this.props.title}</p>
                    <p>{this.props.year}</p>
                    <ImdbRating
                        mImdbID={this.props.imdbID}
                        Rating={this.props.imdbRating}>
                    </ImdbRating>
                </div>
            </div>
        )
    }
}

export default SingleMovie;