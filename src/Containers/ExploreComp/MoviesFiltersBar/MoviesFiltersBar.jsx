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
            genres: '',
            ratings: '',
            years: '',
            languages: '',
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
                        filterClass={'genres'}
                        filterOn={genresOn}
                        showMenu={() => this.setState({ genresOn: !genresOn })}
                        filterOne={'Action'}
                        filterTwo={'Drama'}
                        filterThree={'Comedy'}
                        filterMovies={(filter) => this.filter(filter)}
                    />

                    <Dropdown
                        filterClass={'ratings'}
                        filterOn={ratingsOn}
                        showMenu={() => this.setState({ ratingsOn: !ratingsOn })}
                        filterOne={'6.00'}
                        filterTwo={'8.00'}
                        filterThree={'10.00'}
                        filterMovies={(filter) => this.filter(filter)}
                    />

                    <Dropdown
                        filterClass={'years'}
                        filterOn={yearsOn}
                        showMenu={() => this.setState({ yearsOn: !yearsOn })}
                        filterOne={'2000'}
                        filterTwo={'2008'}
                        filterThree={'2010'}
                        filterMovies={(filter) => this.filter(filter)}
                    />

                    <Dropdown
                        filterClass={'languages'}
                        filterOn={languagesOn}
                        showMenu={() => this.setState({ languagesOn: !languagesOn })}
                        filterOne={'Romanian'}
                        filterTwo={'English'}
                        filterThree={'Turkish'}
                        filterMovies={(filter) => this.filter(filter)}
                    />
                </div>
        )
    }
}

