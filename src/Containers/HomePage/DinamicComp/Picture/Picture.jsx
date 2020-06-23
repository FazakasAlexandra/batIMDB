import React, { Component } from 'react';
/* import RespPlayer from '../RespPlayer/RespPlayer';
import { Player } from 'video-react';
import '../../../../../node_modules/video-react/dist/video-react.css' */
import RotateList from 'react-rotate-list';
import axios from 'axios';
import '../Picture/Picture.css';

class Picture extends Component {

    getTrailers = () => {
        axios.get('https://imdb-api.com/en/API/Trailer/k_P5lbxL5X/tt1375666').then(response => {
            /* this.setState({
                movies: response.data.results,
            }) */  //am comentat-o sa nu va incurce cand randati
            console.log('TRAILERS', response)

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
                /* <Player
                    playsInline
                    poster={element.pic}
                    src={()=>{this.getTrailers(element.id)}}
                /> */              

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