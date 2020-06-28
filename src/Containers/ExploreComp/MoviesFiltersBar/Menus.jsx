import React from 'react'
import './Menus.css'
import { LargeMenu } from './Menus/LargeFilterMenu'
import { SmallMenu } from './Menus/SmallFilterMenu'


export class Menus extends React.Component {
    render() {
        return (
            <>
                <LargeMenu
                    filter={(filterClass, filter) => this.props.filter(filterClass, filter)}
                    filterMoviesByRange={(filter, value)=> this.props.filterMoviesByRange(filter, value)}
                    
                />

                <SmallMenu
                    filter={(filterClass, filter) => this.props.filter(filterClass, filter)}
                    filterMoviesByRange={(filter, value)=> this.props.filterMoviesByRange(filter, value)}
                />

            </>
        )
    }
}

