import React from 'react'
import '../Menus.css'
import '../../../../Fontawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Filter} from './Filter'
import dropdowns from './filters.json'

export class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdowns
        }
    }

    componentDidMount() {
        console.log(this.state.dropdowns)
    }
    
    getDropdownArrow(i, dropdownName){
        let {dropdownOn} = this.state.dropdowns[i]

        return <div className="dropdown-menu">
            <p className={dropdownOn ? 
            'filterClass-highlight' : 
            'filterClass'}>

                {/* filter class name : Genre */}
                { dropdownName }
            </p>

            <FontAwesomeIcon icon={dropdownOn ? 
                            "angle-down" :
                            "angle-right"} 
                            onClick={(dropdownOn)=>this.setState({dropdownOn : !dropdownOn})}/>
        </div>
    }

    getDropdowns() {
        let dropdownsWithFilters=[]
        let {props} = this
        let {dropdowns} = this.state
        
        //loops 4 times
        for(let i = 0; i < dropdowns.length; i++){
            let {dropdownName, dropdownOn, filters} = dropdowns[i]

            let arrow = this.getDropdownArrow(i, dropdownName)

            let dropdownWithFilters = filters.map((filter)=>{

                let {filterOn} = filter

                return (
                        <Filter
                        filterClass={dropdownName}
                        filterClassOn={dropdownOn}
                        filter={filter.filterName}
                        filterOn={filterOn}
                        turnFilterOn={(filterOn)=>this.setState({filterOn : !filterOn})}

                        filterMovies={()=>props.filterMovies(dropdownName, filter.filterName)}
                        filterMoviesByRange={(filter, value)=>props.filterMoviesByRange(filter.filterName, value)}
                        
                        minFilterYear = {dropdownName === 'Year' ? filter.minYear : null}
                        maxFilterYear = {dropdownName === 'Year' ? filter.maxYear : null}
                        minFilterRating = {dropdownName == 'Rating' ? filter.minRating : null}
                        maxFilterRating = {dropdownName == 'Rating' ? filter.maxRating : null}
                        step={filter.filterName == 'imdb' ? filter.step : null}
                      />
                    )
            })
            dropdownsWithFilters.push(arrow, ...dropdownWithFilters)
        }
        return dropdownsWithFilters
    }


    render() {
        return (
            <>
            {this.getDropdowns()}
            </>
        )
    }
}