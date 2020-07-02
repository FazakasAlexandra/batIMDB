import React from 'react'
import '../../../../Fontawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {RangeInput} from './RangeInput'

export function Filter (props) {
  let { filterClass, filterClassOn, name, filterOn, filterNumber, turnFilterOn, filterMovies } = props

  function getFilterArrow(){
    if(filterClass === 'Year' || filterClass === 'Ratings'){
        let filterArrow = <FontAwesomeIcon icon={filterOn && filterClassOn ? 
                                                  "angle-down" : 
                                                  "angle-right"} 
                                           onClick={() => turnFilterOn(filterNumber)}
                          />
        return filterArrow
    }
  }

  function getFilterInput(){
    let filterInput = null

    if((filterOn && filterClass === 'Year') || (filterOn && filterClass === 'Ratings')) {
      filterInput =  <RangeInput
                        min={filterClass === 'Year' ? props.minFilterYear : props.minFilterRating}
                        max={filterClass === 'Year' ? props.maxFilterYear : props.maxFilterRating}
                        filterClass={filterClass}
                        filter={name}
                        addValueToJson = {(value)=>{props.addValueToJson(value)}}
                        //filterMoviesByRange={(dropdownName, value)=>props.filterMoviesByRange(dropdownName, value)}
                        step={props.step}
                        value={props.value}
                     /> 
    }

    return filterInput
  }

    return (
        <div onClick={filterClass === 'Year' || filterClass === 'Ratings' ? null : filterMovies}
             id={`filter-${name}`}>

                              <span id={filterOn && filterClassOn? 
                                        `filter-${name}-text-hightlight` :
                                        `filter-${name}-text`}
                               onClick = {()=>turnFilterOn(filterNumber)}>
                               {name}
                               </span>

                                {getFilterArrow()}
                                {getFilterInput()}
        </div>
    )
}