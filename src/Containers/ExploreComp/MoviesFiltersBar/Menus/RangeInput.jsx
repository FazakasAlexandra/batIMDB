import React from 'react'

export class RangeInput extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
             <input
             type="range" 
             min={this.props.min} 
             max={this.props.max} 
             defaultValue={this.props.min}
             className="slider" 
             id="myRange">
             </input>
            </>
        )
    }
}