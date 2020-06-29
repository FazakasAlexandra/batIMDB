import React from 'react'
import '../../../../Fontawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class RangeInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value : this.props.min
        }
        this.myRef = React.createRef();
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
                
                <div className='icon-range-container'>
                {this.props.filterClass === 'Ratings' ? <FontAwesomeIcon icon="minus"/> : null}
                <input
                    id={this.props.filter}
                    type="range"
                    min={this.props.min}
                    max={this.props.max}
                    defaultValue={this.props.min}
                    className="slider"
                    step={this.props.step}
                    value={this.props.value}
                    onChange={(e) => this.checkFilterClass(e)}
                    ref={this.myRef}
                >
                </input>
                {this.props.filterClass === 'Ratings' ? <FontAwesomeIcon icon="plus"/> : null}

                </div>
            </div>
        )
    }
}