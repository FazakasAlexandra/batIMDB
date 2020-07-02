import React from 'react'
import '../Menus.css'
import '../../../../Fontawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Filter } from './Filter'
import dropdowns from './dropdowns.json'

export class Dropdowns extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdowns
        }
    }

    getDropdownArrow(dropdownName, dropdownOn, i) {
        return <div className="dropdown-menu">
            <p className={dropdownOn ?
                'filterClass-highlight' :
                'filterClass'}>
                {dropdownName}
            </p>

            <FontAwesomeIcon icon={dropdownOn ?
                "angle-down" :
                "angle-right"}
                onClick={() => {
                    this.setState([...dropdowns].map((dropdown, idx) => {
                        if (idx === i) dropdown.dropdownOn = !dropdown.dropdownOn
                        return dropdown
                    }))
                }} />
        </div>
    }

    wrapDropdown(filterComponents, dropdownName, dropdownOn, arrow, i) {
        let wrapedDropdown = <div id={dropdownOn ? `${dropdownName}-filters-display` : `${dropdownName}-filters-hide`} key={i}>
                               {filterComponents}
                              </div>
        wrapedDropdown = this.wrapDdAndArr(wrapedDropdown, arrow, i)
        return wrapedDropdown
    }

    wrapDdAndArr(wrapedDropdown, arrow, i) {
        let wraper = <div className='dropdown-menu-container' key={i}>
                            {arrow}
                            {wrapedDropdown}
                     </div>
        return wraper
    }

    turnFilterOn(dropdownNr, filterNr) {
        this.setState([...dropdowns].map((dropdown, i) => {
            if (i === dropdownNr) {
                dropdown.filters.map((filter, idx) => {
                    if (idx === filterNr) {
                        filter.filterOn = !filter.filterOn
                    } else if (idx !== filterNr && filter.filterOn) {
                        filter.filterOn = !filter.filterOn
                    }
                    return filter
                })
            }
            return dropdown
        }))
    }

    checkActiveFilters() {
        let { dropdowns } = this.state
        let queryElements = []
        console.log('here')
        dropdowns.forEach((dropdown, i) => {
            let { dropdownName, dropdownOn, filters } = dropdown
            let filterWithInput = dropdownName === 'Year' || dropdownName === 'Ratings'

            if (dropdownOn) {
                filters.forEach((filter, idx) => {
                    let { filterName, filterOn, value } = filter
                    if (filterOn) {
                        console.log('filter is on')
                        if (filterWithInput) {
                            if (value) {
                                queryElements.push(
                                    dropdownName === 'Ratings' ? 'imdbRating' : dropdownName, '=',
                                    dropdowns[i].filters[idx].value, '&'
                                )
                            }
                        } else {
                            queryElements.push(dropdownName, '=', filterName, '&')
                        }
                    }
                })
            }
        })
        this.sendQuery(queryElements)
    }

    sendQuery(queryElements) {
        queryElements.pop()
        let query = queryElements.join("")
        console.log(query)

        this.props.filterMovies(query)
    }

    addValueToJson(value, dropdownNr, filterNr) {
        let filter = { ...this.state.dropdowns[dropdownNr].filters[filterNr] }
        filter.value = value
        this.setState([...dropdowns].map((dropdown, i) => {
            if (i === dropdownNr) {
                dropdown.filters[filterNr] = filter
            }
            return dropdown
        }), () => {
            this.checkActiveFilters()
        })
    }

    getDropdowns() {
        let dropdownComponents = []

        for (let i = 0; i < this.state.dropdowns.length; i++) {
            let { dropdownOn, dropdownName, filters } = dropdowns[i]

            let arrow = this.getDropdownArrow(dropdownName, dropdownOn, i)

            let filterComponents = filters.map((filter, idx) => {
                let { filterName, filterOn, minYear, maxYear, minRating, maxRating, step } = filter
                return (
                    <Filter
                        key={idx}
                        filterClass={dropdownName}
                        filterClassOn={dropdownOn}
                        name={filterName}
                        filterOn={filterOn}

                        filterNumber={idx}
                        turnFilterOn={(idx) => this.turnFilterOn(i, idx)}

                        addValueToJson={(value) => { this.addValueToJson(value, i, idx) }}
                        filterMovies={() => { this.checkActiveFilters() }}

                        minFilterYear={minYear}
                        maxFilterYear={maxYear}
                        minFilterRating={minRating}
                        maxFilterRating={maxRating}
                        step={filterName == 'imdb' ? step : null}
                    />
                )
            })
            let wrapedDropdown = this.wrapDropdown(filterComponents, dropdownName, dropdownOn, arrow, i)
            dropdownComponents.push(wrapedDropdown)
        }

        return dropdownComponents
    }


    render() {
        return (
            <>
                {this.getDropdowns()}
            </>
        )
    }
}