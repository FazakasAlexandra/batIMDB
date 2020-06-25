import React from 'react'
import '../MoviesFiltersBar.css'
import '../../../../Fontawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {RangeInput} from './RangeInput'
import {Filter} from './Filter'


export function Dropdown(props) {
    return (
        <div className="dropdown-menu-container">
                {/* filter class */}
                <div className="dropdown-menu">
                    <p className={props.filterClassOn ? 
                       'filterClass-highlight' : 
                       'filterClass'}>

                        {/* filter class name : Genre */}
                        {props.filterClass}
                    </p>

                    <FontAwesomeIcon icon={props.filterClassOn ? 
                                     "angle-down" :
                                     "angle-right"} 
                                     onClick={props.showMenu} />
                </div>
                
                {/* filter 1, 2, 3 container */}
                <div id={props.filterClassOn ? 
                    `${props.filterClass}-filter-display` :
                    `${props.filterClass}-filter-hide`} 
                     className='filter'>

                    {/* filter 1 */}
                    <Filter
                    filterClass={props.filterClass}
                    filterClassOn={props.filterClassOn}
                    filter={props.filterOne}
                    filterOn={props.filterOneOn}
                    turnFilterOn={props.turnFilterOneOn}
                    filterMovies={()=>props.filterMovies(props.filterClass, props.filterOne)}
                    filterMoviesByRange={(filter, value)=>props.filterMoviesByRange(filter, value)}
                    minFilterYear = {'1990'}
                    maxFilterYear = {'2000'}
                    minFilterRating = {'3'}
                    maxFilterRating = {'10'}
                    step={props.filterClass === 'Year' ? null : '0.1'}

                    />
                    
                    {/* filter 2 */}
                    <Filter
                    filterClass={props.filterClass}
                    filterClassOn={props.filterClassOn}
                    filter={props.filterTwo}
                    filterOn={props.filterTwoOn}
                    turnFilterOn={props.turnFilterTwoOn}
                    filterMovies={() => props.filterMovies(props.filterClass, props.filterTwo)}
                    filterMoviesByRange={(filter, value)=>props.filterMoviesByRange(filter, value)}
                    minFilterYear = {'2000'}
                    maxFilterYear = {'2010'}
                    minFilterRating = {'44'}
                    maxFilterRating = {'100'}
                    step={null}
                    />
                    
                    {/* filter 3 */}
                    <Filter
                    filterClass={props.filterClass}
                    filterClassOn={props.filterClassOn}
                    filter={props.filterThree}
                    filterOn={props.filterThreeOn}
                    turnFilterOn={props.turnFilterThreeOn}
                    filterMovies={()=>props.filterMovies(props.filterClass, props.filterThree)}
                    filterMoviesByRange={(filter, value)=>props.filterMoviesByRange(filter, value)}
                    minFilterYear = {'2010'}
                    maxFilterYear = {'2020'}
                    minFilterRating = {'48'}
                    maxFilterRating = {'100'}
                    step={null}
                    />

                </div>
        </div>
    )
}