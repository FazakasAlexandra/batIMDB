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

    getDropdownArrow(dropdownName, dropdownOn, i){
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
                                        this.setState([...dropdowns].map((dropdown, idx)=>{
                                            if(idx === i){
                                                dropdown.dropdownOn = !dropdown.dropdownOn
                                            }
                                            return dropdown
                                        }))}
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

    turnFilterOn(filterNr, dropdownNr){
        this.setState([...dropdowns].map((dropdown, i)=>{
            if(i === dropdownNr){
                dropdown.filters.map((filter, idx)=>{
                    if(idx === filterNr){
                        filter.filterOn = !filter.filterOn
                    }
                    return filter
                })
            }
            return dropdown
        }))
    }

    getDropdowns() {
        let dropdownComponents=[]
        let {props} = this

        for(let i = 0; i < this.state.dropdowns.length; i++){
            let {dropdownOn, dropdownName, filters} = dropdowns[i]
            
            let arrow = this.getDropdownArrow(dropdownName, dropdownOn, i)

            let filterComponents = filters.map((filter, idx)=>{
                let {filterName, filterOn, minYear, maxYear, minRating, maxRating, step} = filter
                return (
                        <Filter
                        filterClass={dropdownName}
                        filterClassOn={dropdownOn}
                        name={filterName}
                        filterOn={filterOn}

                        filterNumber={idx}
                        turnFilterOn={(idx)=>this.turnFilterOn(idx, i)}

                        filterMovies={()=>props.filterMovies(dropdownName, filterName)}
                        filterMoviesByRange={(filterName, value)=>props.filterMoviesByRange(filterName, value)}
                        
                        minFilterYear = {minYear}
                        maxFilterYear = {maxYear}
                        minFilterRating = {minRating}
                        maxFilterRating = {maxRating}
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