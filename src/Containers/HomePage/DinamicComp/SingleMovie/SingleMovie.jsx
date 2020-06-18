import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import "./SingleMovie.css";

class SingleMovie extends Component {
    render() {
        return (
            <div className="DinamicSingleMovie">
                <img src={this.props.poster} />
                <div className="DinamicInfo">
                    <p>{this.props.runtime}</p>
                    <p>{this.props.title}</p>
                    <p>{this.props.year}</p>
                </div>
            </div>
        )
    }
}

export default withRouter(SingleMovie);