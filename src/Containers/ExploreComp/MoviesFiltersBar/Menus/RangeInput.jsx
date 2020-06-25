import React from 'react'

export class RangeInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value : this.props.min
        }
    }

    showValue(e){
        //console.log(this.props.filterClass, this.props.filter, e.target.value)
        console.log(this.props.filterClass, e.target.value)
        localStorage.setItem(`${this.props.filterClass}`,`${e.target.value}`)
        this.setState({value : e.target.value})
    }

    checkFilterClass(e){
        if(this.props.filterClass === 'Ratings') {
            this.setState({value : e.target.value})
            this.props.filterMoviesByRange(this.props.filter, e.target.value)
        } else if(this.props.filterClass === 'Year') {
            this.setState({value : e.target.value})
            this.props.filterMoviesByRange(this.props.filterClass, e.target.value)
        }
    }

    render(){
        return(
            <div className='range-container'>
                <p className="range-value">{this.state.value}{this.props.filter==='RottenTomatoes' ? '%' : null}</p>

                <input
                    type="range"
                    min={this.props.min}
                    max={this.props.max}
                    defaultValue={this.props.min}
                    className="slider"
                    id="myRange"
                    step={this.props.step}
                    value={this.props.value}
                    onChange={(e) => this.checkFilterClass(e)}
                >
                </input>
            </div>
        )
    }
}