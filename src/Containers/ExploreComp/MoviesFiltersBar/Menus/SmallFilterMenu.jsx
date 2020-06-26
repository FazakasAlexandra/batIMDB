import React from 'react'
import '../Menus.css'
import '../../../../Fontawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FilterMenu} from './FilterMenu'

export class SmallMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOn: false
        }
    }
    render() {
        let { menuOn } = this.state
        return (
            <>
                <span className="bars-container">
                    <FontAwesomeIcon icon={'bars'} onClick={() => { this.setState({ menuOn: !menuOn }) }} />
                </span>

                <div className='small-dropdown-menus-container' style={{ display: menuOn ? 'flex' : 'none' }}>
                    <FilterMenu
                        genresOn={this.props.genresOn}
                        showGenreMenu={this.props.showGenreMenu}

                        languagesOn={this.props.languagesOn}
                        showLanguageMenu={this.props.showLanguageMenu}

                        yearsOn={this.props.yearsOn}
                        showYearMenu={this.props.showYearMenu}
                        
                        ratingsOn={this.props.ratingsOn}
                        showImdbRatingMenu={this.props.showImdbRatingMenu}

                        filter={(filterClass, filter) => this.props.filter(filterClass, filter)}
                        filterMoviesByRange={(filter, value)=> this.props.filterMoviesByRange(filter, value)}
                    />

                </div>
            </>
        )
    }
}