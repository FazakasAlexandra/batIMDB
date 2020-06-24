import React from 'react'
import '../MoviesFiltersBar.css'
import '../../../../Fontawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {RangeInput} from './RangeInput'

export function Dropdown(props) {

    return (
        <div className="dropdown-menu-container">

                {/* filter class */}
                <div className="dropdown-menu">

                    <p className={props.filterOn ? 
                       'filterClass-highlight' : 
                       'filterClass'}>

                        {/* filter class name : Genre */}
                        {props.filterClass}
                    </p>

                    <FontAwesomeIcon icon={props.filterOn ? 
                                     "angle-down" :
                                     "angle-right"} 
                                     onClick={props.showMenu} />
                </div>

                <div id={props.filterOn ? 
                    `${props.filterClass}-filter-display` :
                    `${props.filterClass}-filter-hide`} 
                     className='filter'>
                    
                    
                    {/* filter 1 */}
                    <p onClick={props.filterClass === 'Year' || props.filterClass === 'Ratings' ?
                                null :
                                () => props.filterMovies(props.filterClass, props.filterOne)}
                                
                                id={props.filterOneOn && props.filterOn ? 
                                `filter-${props.filterOne}-highlight` : 
                                `filter-${props.filterOne}`}
                                >

                                {/* filter 1 name : Action */}
                                <span id={`filter-${props.filterOne}-text`}>{props.filterOne}</span>
                                

                                 {/* righ/down arrow only on Year and Ratings filters*/}
                                {
                                   props.filterClass === 'Year' 
                                || props.filterClass === 'Ratings' 
                                ? <FontAwesomeIcon icon={props.filterOneOn && props.filterOn ? 
                                    "angle-down" : 
                                    "angle-right"} 
                                    //onClick={props.showRangeInput} 
                                    onClick={() => props.turnOneOn()}
                                  /> 
                                : null        
                                }
                                    

                                {/* show rangeInput only for Year and Ratings filters
                                    and only when they are on */}
                                {
                                   props.filterOneOn && props.filterClass === 'Year'
                                || props.filterOneOn && props.filterClass === 'Ratings' 
                                ? <RangeInput/> 
                                : null
                                }
                    </p>


                     {/* filter 2 */}
                    <p onClick={props.filterClass === 'Year' || props.filterClass === 'Ratings' ?
                                null :
                                () => props.filterMovies(props.filterClass, props.filterTwo)}

                               id={props.filterTwoOn && props.filterOn ? 
                                `filter-${props.filterTwo}-highlight` : 
                                `filter-${props.filterTwo}`}
                                >

                                 {/* filter 2 name : Drama */}
                                <span id={`filter-${props.filterTwo}-text`}>{props.filterTwo}</span>


                                {/* righ/down arrow only on Year and Ratings filters*/}
                                {  
                                   props.filterClass === 'Year' 
                                || props.filterClass === 'Ratings' 
                                ? <FontAwesomeIcon icon={props.filterTwoOn && props.filterOn ? 
                                    "angle-down" : 
                                    "angle-right"} 
                                    //onClick={props.showRangeInput}
                                    onClick={() => props.turnTwoOn()}
                                 /> 
                                 : null 
                                 }
                                

                                {/* show rangeInput only for Year and Ratings filters
                                    and only when they are on */}
                                {
                                   props.filterTwoOn && props.filterClass === 'Year' 
                                || props.filterTwoOn && props.filterClass === 'Ratings' 
                                ? <RangeInput/> 
                                : null
                                }
                     </p>

                    
                    {/* filter 3 */}
                    <p onClick={props.filterClass === 'Year' || props.filterClass === 'Ratings' ?
                                null :
                                () => props.filterMovies(props.filterClass, props.filterThree)}

                                id={props.filterThreeOn && props.filterOn ? 
                                `filter-${props.filterThree}-highlight` : 
                                `filter-${props.filterThree}`}
                                >
                                
                                {/* filter 3 name : Comedy */}
                                <span id={`filter-${props.filterThree}-text`}>{props.filterThree}</span>


                                {/* righ/down arrow only on Year and Ratings filters */}
                                {  
                                   props.filterClass === 'Year' 
                                || props.filterClass === 'Ratings' 
                                ? <FontAwesomeIcon icon={props.filterThreeOn && props.filterOn? 
                                    "angle-down" : 
                                    "angle-right"} 
                                    //onClick={props.showRangeInput}
                                    onClick={() => props.turnThreeOn()}
                                 /> 
                                 : null 
                                 }


                                {/* show rangeInput only for Year and Ratings filters
                                    and only when they are on */}
                                {
                                   props.filterThreeOn 
                                && props.filterClass === 'Year' 
                                || props.filterThreeOn 
                                && props.filterClass === 'Ratings' 
                                ? <RangeInput/> 
                                : null
                                }


                    </p>
                </div>
        </div>
    )
}