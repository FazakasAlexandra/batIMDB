import React from 'react'
import {Dropdown} from './Dropdown'

export function LargeMenu(props) {
    return (
        <div className='dropdown-menus-container'>
        <Dropdown
            filterClass={'Genre'}
            filterOn={props.genresOn}
            showMenu={props.showGenreMenu}
            filterOne={'Action'}
            filterTwo={'Drama'}
            filterThree={'Comedy'}
            filterMovies={(filterClass, filter) => props.filter(filterClass, filter)}
        />

        <Dropdown
            filterClass={'Language'}
            filterOn={props.languagesOn}
            showMenu={props.showLanguageMenu}
            filterOne={'Romanian'}
            filterTwo={'English'}
            filterThree={'German'}
            filterMovies={(filterClass, filter) => props.filter(filterClass, filter)}
        />

        <Dropdown
            filterClass={'Year'}
            filterOn={props.yearsOn}
            showMenu={props.showYearMenu}
            filterOne={'2000'}
            filterTwo={'2008'}
            filterThree={'2010'}
            filterMovies={(filterClass, filter) => props.filter(filterClass, filter)}
        />

        <Dropdown
            filterClass={'imdbRating'}
            filterOn={props.ratingsOn}
            showMenu={props.showImdbRatingMenu}
            filterOne={'7.0'}
            filterTwo={'8.0'}
            filterThree={'9.0'}
            filterMovies={(filterClass, filter) => props.filter(filterClass, filter)}
        />
        </div>
    )
}