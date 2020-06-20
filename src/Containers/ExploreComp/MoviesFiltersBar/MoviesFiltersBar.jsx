import React from 'react'
import './filtersBar.css'
import { Dropdown } from './Dropdown'
import '../../../Fontawesome/fontawesome'


export class MoviesFiltersBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            genresOn: false,
            ratingsOn: false,
            yearsOn: false,
            languagesOn: false,
        }
    }

    filter(filter) {
        console.log(filter)
    }

    render() {
        let { genresOn, ratingsOn, yearsOn, languagesOn } = this.state
        return (
                <div className='dropdown-menus-container'>
                    <Dropdown
                        filterClass={'Genre'}
                        filterOn={genresOn}
                        showMenu={() => this.setState({ genresOn: !genresOn })}
                        filterOne={'Action'}
                        filterTwo={'Drama'}
                        filterThree={'Comedy'}
                        filterMovies={(filterClass, filter) => this.props.filter(filterClass, filter)}
                    />

                    <Dropdown
                        filterClass={'imdbRating'}
                        filterOn={ratingsOn}
                        showMenu={() => this.setState({ ratingsOn: !ratingsOn })}
                        filterOne={'7.0'}
                        filterTwo={'8.0'}
                        filterThree={'9.0'}
                        filterMovies={(filterClass, filter) => this.props.filter(filterClass, filter)}
                    />

                    <Dropdown
                        filterClass={'Year'}
                        filterOn={yearsOn}
                        showMenu={() => this.setState({ yearsOn: !yearsOn })}
                        filterOne={'2000'}
                        filterTwo={'2008'}
                        filterThree={'2010'}
                        filterMovies={(filterClass, filter) => this.props.filter(filterClass, filter)}
                    />

                    <Dropdown
                        filterClass={'Language'}
                        filterOn={languagesOn}
                        showMenu={() => this.setState({ languagesOn: !languagesOn })}
                        filterOne={'Romanian'}
                        filterTwo={'English'}
                        filterThree={'German'}
                        filterMovies={(filterClass, filter) => this.props.filter(filterClass, filter)}
                    />
                </div>
        )
    }
}

