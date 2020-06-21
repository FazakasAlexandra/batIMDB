import React from 'react'
import './MoviesFiltersBar.css'
import { LargeMenu } from './LargeMenu'
import { SmallMenu } from './SmallMenu'


export class MoviesFiltersBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            genresOn: false,
            ratingsOn: false,
            yearsOn: false,
            languagesOn: false,
            menuOn: false
        }
    }

    render() {
        let { genresOn, ratingsOn, yearsOn, languagesOn} = this.state
        return (
            <>
                <LargeMenu
                    genresOn={genresOn}
                    ratingsOn={ratingsOn}
                    yearsOn={yearsOn}
                    languagesOn={languagesOn}
                    showGenreMenu={() => this.setState({ genresOn: !genresOn })}
                    showLanguageMenu={() => this.setState({ languagesOn: !languagesOn })}
                    showYearMenu={() => this.setState({ yearsOn: !yearsOn })}
                    showImdbRatingMenu={() => this.setState({ ratingsOn: !ratingsOn })}
                    filter={(filterClass, filter) => this.props.filter(filterClass, filter)}
                />

                <SmallMenu
                    genresOn={genresOn}
                    ratingsOn={ratingsOn}
                    yearsOn={yearsOn}
                    languagesOn={languagesOn}
                    showGenreMenu={() => this.setState({ genresOn: !genresOn })}
                    showLanguageMenu={() => this.setState({ languagesOn: !languagesOn })}
                    showYearMenu={() => this.setState({ yearsOn: !yearsOn })}
                    showImdbRatingMenu={() => this.setState({ ratingsOn: !ratingsOn })}
                    filter={(filterClass, filter) => this.props.filter(filterClass, filter)}
                />

            </>
        )
    }
}

