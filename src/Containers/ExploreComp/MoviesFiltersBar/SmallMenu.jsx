import React from 'react'
import { Dropdown } from './Dropdown'
import './MoviesFiltersBar.css'
import '../../../Fontawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class SmallMenu extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            menuOn : false
        }
    }
    render() {
        let {menuOn} = this.state
    return (
        <>
        <span className="bars-container">
            <FontAwesomeIcon icon={'bars'} onClick={() => { this.setState({ menuOn: !menuOn }) }} />
        </span>

        <div className='small-dropdown-menus-container' style={{display : menuOn ? 'flex' : 'none'}}>
            <Dropdown
                filterClass={'Genre'}
                filterOn={this.props.genresOn}
                showMenu={this.props.showGenreMenu}
                filterOne={'Action'}
                filterTwo={'Drama'}
                filterThree={'Comedy'}
                filterMovies={(filterClass, filter) => this.props.filter(filterClass, filter)}
            />

            <Dropdown
                filterClass={'Language'}
                filterOn={this.props.languagesOn}
                showMenu={this.props.showLanguageMenu}
                filterOne={'Romanian'}
                filterTwo={'English'}
                filterThree={'German'}
                filterMovies={(filterClass, filter) => this.props.filter(filterClass, filter)}
            />

            <Dropdown
                filterClass={'Year'}
                filterOn={this.props.yearsOn}
                showMenu={this.props.showYearMenu}
                filterOne={'2000'}
                filterTwo={'2008'}
                filterThree={'2010'}
                filterMovies={(filterClass, filter) => this.props.filter(filterClass, filter)}
            />

            <Dropdown
                filterClass={'imdbRating'}
                filterOn={this.props.ratingsOn}
                showMenu={this.props.showImdbRatingMenu}
                filterOne={'7.0'}
                filterTwo={'8.0'}
                filterThree={'9.0'}
                filterMovies={(filterClass, filter) => this.props.filter(filterClass, filter)}
            />
        </div>
        </>
    )
    }
}