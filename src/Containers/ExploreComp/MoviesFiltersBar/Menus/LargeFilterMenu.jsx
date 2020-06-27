import React from 'react'
import { Dropdown } from './Dropdown'

export function LargeMenu(props) {
    return (
        <div className='dropdown-menus-container'>
            <Dropdown
                filter={(filterClass, filter) => props.filter(filterClass, filter)}
                filterMoviesByRange={(filter, value)=> props.filterMoviesByRange(filter, value)}
            />

        </div>
    )
}