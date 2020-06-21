import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withTheme } from 'styled-components';

class ImdbPlugin extends Component {

    render() {

        return (
            <div className="ImdbPlugin">
                <span class="imdbRatingPlugin" data-user="ur120026628" data-title={this.props.mImdbID} data-style="p1">
                    <a href="https://www.imdb.com/title/tt6858702/?ref_=plg_rt_1">
                        <img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_46x22.png" alt=" myIMDb(2020) on IMDb" />
                    </a>
                </span>
                <script>{(function (d, s, id) {
                    var js,
                    stags = d.getElementsByTagName(s)[0]; 
                    if (d.getElementById(id)) { return; } 
                    js = d.createElement(s); 
                    js.id = id; 
                    js.src = "https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/js/rating.js"; 
                    stags.parentNode.insertBefore(js, stags);
                })(document, "script", "imdb-rating-api")}
                </script>
            </div>
        )
    }
}

export default withTheme(withRouter(ImdbPlugin));



