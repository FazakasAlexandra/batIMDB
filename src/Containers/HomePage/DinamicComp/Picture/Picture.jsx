import React, { Component } from 'react';
import RotateList from 'react-rotate-list';
import axios from 'axios';
import '../Picture/Picture.css';

class Picture extends Component {
 
    render() {        
        const { picsAndIdsArray } = this.props;
        let pics = picsAndIdsArray.map((element, i) => {
            return (
                <a 
                   onClick={()=> this.props.functionId(element.id) }
                   key={i}
                   >
                    <img src={element.pic}  />
                </a>
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