import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withTheme } from 'styled-components';
import ImdbPlugin from '../ImdbPlugin/ImdbPlugin';
import "./SingleMovie.css";


class SingleMovie extends Component {

    render() {
        /* console.log('tema', this.props.theme) */
        return (            
            <div className="DinamicSingleMovie">
                <img className="DinamicSingleMovieImg" src={this.props.poster} />
                <div className="DinamicInfo">
                    <p>{this.props.runtime}</p>
                    <p>{this.props.title}</p>
                    <p>{this.props.year}</p>
                    <ImdbPlugin mImdbID={this.props.imdbID}></ImdbPlugin>
                </div>
            </div>
        )
    }
}

export default withTheme(withRouter(SingleMovie));