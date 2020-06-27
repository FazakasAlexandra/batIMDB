import React from 'react'
import { Dropdowns } from './Dropdowns'

export function LargeMenu(props) {
    return (
        <div className='dropdown-menus-container'>
            <Dropdowns
                filterMovies={(filterClass, filter) => props.filter(filterClass, filter)}
                filterMoviesByRange={(filter, value)=> props.filterMoviesByRange(filter, value)}
            />

        </div>
    )
}