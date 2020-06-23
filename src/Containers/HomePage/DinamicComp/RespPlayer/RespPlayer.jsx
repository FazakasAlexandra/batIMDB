import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class RespPlayer extends Component {
    render() {
        return (
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url={this.props.url}
                    width='100%'
                    height='100%'
                />
            </div>
        )
    }
}

export default RespPlayer;