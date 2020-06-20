import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withTheme } from 'styled-components';
import "./SingleMovie.css";


class SingleMovie extends Component {

    render() {
        /* console.log('tema', this.props.theme) */
        return (            
            <div className="DinamicSingleMovie">
                <img id="imgMovie" src={this.props.poster} />
                <div className="DinamicInfo">
                    <p>{this.props.runtime}</p>
                    <p>{this.props.title}</p>
                    <p>{this.props.year}</p>
                </div>
            </div>
        )
    }
}

export default withTheme(withRouter(SingleMovie));