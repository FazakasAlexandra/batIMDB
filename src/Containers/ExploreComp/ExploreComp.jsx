import React from 'react'
import {MoviesFiltersBar} from './MoviesFiltersBar/MoviesFiltersBar'
import {FilteredMovies} from './FilteredMovies/FilteredMovies'

export class ExploreComp extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <>
            <MoviesFiltersBar />
            <FilteredMovies />
            </>
        )
    }
}