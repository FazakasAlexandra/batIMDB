import React from 'react'
import '../Menus.css'
import '../../../../Fontawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Filter} from './Filter'
import dropdowns from './dropdowns.json'

export class Dropdowns extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdowns 
        }
    }

    componentDidMount() {
        console.log(this.state.dropdowns)
    }

    getDropdownArrow(dropdownName, dropdownOn){
        return <div className="dropdown-menu">
                    <p className={dropdownOn ? 
                    'filterClass-highlight' : 
                    'filterClass'}>

                        {/* Genre */}
                        { dropdownName }
                    </p>

                    <FontAwesomeIcon icon={dropdownOn ? 
                                    "angle-down" :
                                    "angle-right"} 
                                    onClick={()=>{
                                        this.setState({dropdownOn : !dropdownOn})
                                        console.log(this.state)
                                    }
                                }
                                    />
                </div>
    }

    wrapDropdown(filterComponents, dropdownName, dropdownOn){
        let wraper = React.createElement(
            'div', 
            {id: dropdownOn ?`${dropdownName}-filters-display`: `${dropdownName}-filters-hide`}, 
            filterComponents
        )
        return wraper
    }

    getDropdowns() {
        let dropdownComponents=[]
        let {props} = this

        for(let i = 0; i < this.state.dropdowns.length; i++){
            let {dropdownOn, dropdownName, filters} = dropdowns[i]
            
            let arrow = this.getDropdownArrow(dropdownName, dropdownOn)

            let filterComponents = filters.map((filter)=>{
                let {filterName, filterOn, minYear, maxYear, minRating, maxRating, step} = filter
                return (
                        <Filter
                        filterClass={dropdownName}
                        filterClassOn={dropdownOn}
                        name={filterName}
                        filterOn={filterOn}
                        turnFilterOn={(filterOn)=>this.setState({filterOn : !filterOn})}

                        filterMovies={()=>props.filterMovies(dropdownName, filterName)}
                        filterMoviesByRange={(filterName, value)=>props.filterMoviesByRange(filterName, value)}
                        
                        minFilterYear = {dropdownName === 'Year' ? minYear : null}
                        maxFilterYear = {dropdownName === 'Year' ? maxYear : null}
                        minFilterRating = {dropdownName == 'Rating' ? minRating : null}
                        maxFilterRating = {dropdownName == 'Rating' ? maxRating : null}
                        step={filterName == 'imdb' ? step : null}
                      />
                    )
            })
            let wrapedDropdown = this.wrapDropdown(filterComponents, dropdownName, dropdownOn)
            dropdownComponents.push(arrow, wrapedDropdown)
        }

        return dropdownComponents
    }


    render() {
        return (
            <>
            {this.getDropdowns()}
            </>
        )
    }
}