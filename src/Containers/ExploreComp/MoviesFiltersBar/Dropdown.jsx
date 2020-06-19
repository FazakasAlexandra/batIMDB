import React from 'react'
import './filtersBar.css'
import '../../../Fontawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Dropdown(props) {
    return (
        <>
        <>
        <div className="dropdown-menu">
            <p>All {props.filterClass}</p>
            <FontAwesomeIcon icon={props.filterOn ? "angle-down" : "angle-right"} onClick={props.showMenu} />
        </div>
        </>
        <>
        <div id={props.filterOn ? `${props.filterClass}-display` : `${props.filterClass}-filter-hide`} className='filter'>
            <p onClick={() => props.filterMovies(props.filterOne)}>{props.filterOne}</p>
            <p onClick={() => props.filterMovies(props.filterTwo)}>{props.filterTwo}</p>
            <p onClick={() => props.filterMovies(props.filterThree)}>{props.filterThree}</p>
        </div>
        </>
        </>
    )
}