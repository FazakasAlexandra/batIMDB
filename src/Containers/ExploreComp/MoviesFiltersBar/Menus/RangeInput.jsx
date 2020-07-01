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
            this.props.addValueToJson(this.state.value)
            this.props.filterMoviesByRange(this.props.filter, e.target.value)
        } else if(this.props.filterClass === 'Year') {
            this.setState({value : e.target.value})
            this.props.addValueToJson(this.state.value)
            this.props.filterMoviesByRange(this.props.filterClass, e.target.value)
        }
    }

    plusClick(){
        if(this.props.filter === 'imdb'){ 
            this.setState((state)=>{
                if(this.state.value <= 10) {
                this.props.addValueToJson(this.state.value)
                this.props.filterMoviesByRange(this.props.filter, this.state.value)
                return {value : (Math.round(parseFloat(state.value) * 10) + 1) / 10}
                }
            })
        }  
    }

    minusClick(){
        if(this.props.filter === 'imdb'){ 
        this.setState((state)=>{
            if(this.state.value >= 1){
            this.props.addValueToJson(this.state.value)
            this.props.filterMoviesByRange(this.props.filter, this.state.value)
            return {value : (Math.round(parseFloat(state.value) * 10) - 1) / 10}
            //parse int
            }
        })
        }
    }

    render(){
        return(
            <div className='range-container'>
                <p className="range-value">{this.state.value}{this.props.filter==='RottenTomatoes' ? '%' : null}</p>
                
                <div className='icon-range-container'>
                {this.props.filterClass === 'Ratings' ? <FontAwesomeIcon icon="minus"
                                                         onClick={()=>{this.minusClick()}}/> : null}
                <input
                    id={this.props.filter}
                    type="range"
                    min={this.props.min}
                    max={this.props.max}
                    className="slider"
                    step={this.props.step}
                    value={Math.round(parseFloat(this.state.value) * 10)/10}
                    onChange={(e) => this.checkFilterClass(e)}
                    ref={this.myRef}
                >
                </input>
                {this.props.filterClass === 'Ratings' ? <FontAwesomeIcon icon="plus"
                                                          onClick={()=>{this.plusClick()}}/> : null}

                </div>
            </div>
        )
    }
}