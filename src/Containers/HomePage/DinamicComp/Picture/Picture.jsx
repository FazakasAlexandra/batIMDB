import React, { Component } from 'react';
import RotateList from 'react-rotate-list';
import '../Picture/Picture.css';

class Picture extends Component {
    render() {        
        const { picturesArray } = this.props;
        let pics = picturesArray.map((pic, i) => {
            return (
                <img src={pic} key={i}/>
            )
        });
        return (
        <div className="Picture">
            <RotateList height={580} duration={900} delay={5000} >
              {pics}
            </RotateList>
        </div>            
            
        )
    }
}

export default Picture;