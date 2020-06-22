import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../../Fontawesome/fontawesome';
import { withTheme } from 'styled-components';

class ImdbRating extends Component {

    render() {
        const mystyle = {
            rating: {
                marginTop: "3px",
                color: "white",
                textAlign: "center",
            },
            star: {
                color: "yellow",
            }
        }
        return (
            <span data-title={this.props.mImdbID}>
                <a href={`https://www.imdb.com/title/${this.props.mImdbID}/?ref_=plg_rt_1`}>
                    <img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" />
                </a>"
                <span style={mystyle.rating}>
                    {this.props.Rating}  / 10 
                        <FontAwesomeIcon
                        icon="star"
                        style={mystyle.star} />
                </span>
            </span>
        )
    }
}

export default ImdbRating;
