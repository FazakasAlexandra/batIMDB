import React from 'react'
import { FilterMenu } from './FilterMenu'

export function LargeMenu(props) {
    return (
        <div className='dropdown-menus-container'>
            <FilterMenu
                genresOn={props.genresOn}
                showGenreMenu={props.showGenreMenu}
                filterOneOne={props.filterOneOn}

                languagesOn={props.languagesOn}
                showLanguageMenu={props.showLanguageMenu}
                filterOneOne={props.filterTwoOn}

                yearsOn={props.yearsOn}
                showYearMenu={props.showYearMenu}
                filterOneOne={props.filterThreeOn}

                yearsOn={props.yearsOn}
                showYearMenu={props.showYearMenu}

                ratingsOn={props.ratingsOn}
                showImdbRatingMenu={props.showImdbRatingMenu}

                filter={(filterClass, filter) => props.filter(filterClass, filter)}
            />

        </div>
    )
}