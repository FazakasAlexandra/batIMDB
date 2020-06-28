import React from 'react'
import { FilterMenu } from './FilterMenu'

export function LargeMenu(props) {
    return (
        <div className='dropdown-menus-container'>
            <FilterMenu
                genresOn={props.genresOn}
                showGenreMenu={props.showGenreMenu}
                filterOneOn={props.filterOneOn}

                languagesOn={props.languagesOn}
                showLanguageMenu={props.showLanguageMenu}
                filterTwoOn={props.filterTwoOn}

                yearsOn={props.yearsOn}
                showYearMenu={props.showYearMenu}
                filterThreeOn={props.filterThreeOn}

                ratingsOn={props.ratingsOn}
                showImdbRatingMenu={props.showImdbRatingMenu}

                filter={(filterClass, filter) => props.filter(filterClass, filter)}
                filterMoviesByRange={(filter, value)=> props.filterMoviesByRange(filter, value)}
            />

        </div>
    )
}