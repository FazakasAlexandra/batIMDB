import React, { Component } from 'react';
/* import RespPlayer from '../RespPlayer/RespPlayer';
import { Player } from 'video-react';
import '../../../../../node_modules/video-react/dist/video-react.css' */
import RotateList from 'react-rotate-list';
import axios from 'axios';
import '../Picture/Picture.css';

class Picture extends Component {

    state = {
        movie:'',
    }

    getTrailers = (id) => {
        axios.get(`https://imdb-api.com/en/API/Trailer/k_P5lbxL5X/${id}`).then(response => {
            /* this.setState({
                movies: response.data.results,
            }) */  //am comentat-o sa nu va incurce cand randati
            console.log('TRAILERS', response)
            this.setState({movie: response.data.link})
        })
    }

    renderTrailer = (id) => {
        this.getTrailers(id);
    }

    render() {
        const { picsAndIdsArray } = this.props;
        let pics = picsAndIdsArray.map((element, i) => {
            return (
                <img src={element.pic} key={i} />
               /*  <Player                    
                    playsInline
                    poster={element.pic}
                    onClick={()=>{this.getTrailers(element.id)}}
                    src={this.state.movie}
                />  */             

            )
        });
        return (
            <div className="Picture">
                <RotateList
                    height={580}
                    duration={900}
                    delay={5000} >
                    {pics}
                </RotateList>
            </div>

        )
    }
}

export default Picture;

/* render() {
    const { picturesArray } = this.props;
    let pics = picturesArray.map((pic, i) => {
        return (
            <img src={pic} key={i} />
        )
    }); */


    /* 
    <iframe
        // vine pe resp la al doilea fetch
        // response.data.linkEmbed  "https://www.imdb.com/video/imdb/vi1946858521/imdb/embed?autoplay=false&width=480"
        src="https://www.imdb.com/video/imdb/vi1946858521/imdb/embed?autoplay=false&width=480"
        width="480"
        height="270"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        frameborder="no"
        scrolling="no">
    </iframe>
    
    */