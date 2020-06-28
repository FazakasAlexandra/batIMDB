import React from 'react'
import '../../../../Fontawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {RangeInput} from './RangeInput'

export function Filter (props) {
  let { filterClass, filterClassOn, name, filterOn,  } = props

  function getFilterArrow(){
    if(filterClass === 'Year' || filterClass === 'Ratings'){
        let filterArrow= <FontAwesomeIcon icon={filterOn && filterClassOn ? 
                       "angle-down" : 
                       "angle-right"} 
                      onClick={() => props.turnFilterOn(props.filterNumber)}
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
                        filterMoviesByRange={(name, value)=>props.filterMoviesByRange(name, value)}
                        step={props.step}
                        value={props.value}
                     /> 
    }

    return filterInput
  }

    return (
        <div onClick={filterClass === 'Year' || filterClass === 'Ratings' ?
                                null :
                                props.filterMovies}
                                
                                id={filterOn && filterClassOn ? 
                                `filter-${name}-highlight` : 
                                `filter-${name}`}
                                >

                              <span id={`filter-${name}-text`}
                              onClick={() => props.turnFilterOn()}
                              >{name}</span>

                                {getFilterArrow()}
                                {getFilterInput()}
        </div>
    )
}