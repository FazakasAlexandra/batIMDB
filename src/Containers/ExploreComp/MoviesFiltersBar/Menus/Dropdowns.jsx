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

    componentWillUnmount() {
        this.setState(dropdowns.map((dropdown => {
            if (dropdown.dropdownOn) {
                return dropdown.dropdownOn = false
            }
        })))
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
                onClick={() => { this.toggleDropdown(i) }} />
        </div>
    }

    toggleDropdown(i) {
        this.setState([...dropdowns].map((dropdown, idx) => {
            //stop at the target dropdown and toggle it
            if (idx === i) dropdown.dropdownOn = !dropdown.dropdownOn
            return dropdown
        }), () => {
            let newDropdowns = [...this.state.dropdowns]
            if (!newDropdowns[i].dropdownOn) {
                newDropdowns[i].filters.forEach((filter => {
                    filter.filterOn = false
                }))
                console.log(newDropdowns[i].dropdownName)
                this.updateActiveQuery(newDropdowns[i].dropdownName)
            }
            this.setState({ dropdowns: newDropdowns }, () => {
                this.checkActiveFilters()
            })
        })
    }

    updateActiveQuery(name) {
        if (sessionStorage.getItem('activeQuery') !== null) {
            let activeQuery = sessionStorage.getItem('activeQuery')
            if (activeQuery.includes(name) || activeQuery.includes('imdbRating') && !activeQuery.includes('&')) {
                sessionStorage.removeItem('activeQuery')
            }
        }
    }

    toggleFilter(dropdownNr, filterNr) {
        this.setState([...dropdowns].map((dropdown, i) => {
            // stop at the dropdown that contains the target filter
            if (i === dropdownNr) {
                dropdown.filters.map((filter, idx) => {
                    // toggles the clicked filter
                    if (idx === filterNr) {
                        // toggle acction
                        filter.filterOn = !filter.filterOn
                        // turns off other filter that is on inside that dropdown
                    } else if (idx !== filterNr && filter.filterOn) {
                        filter.filterOn = !filter.filterOn
                    }
                    return filter
                })
            }
            return dropdown
        }), () => {
            this.checkActiveFilters()
        })

    }

    checkActiveFilters() {
        let { dropdowns } = this.state
        let queryElements = []
        dropdowns.forEach((dropdown) => {
            let { dropdownName, dropdownOn, filters } = dropdown
            let filterWithInput = dropdownName === 'Year' || dropdownName === 'Ratings'

            if (dropdownOn) {
                filters.forEach((filter) => {
                    let { filterName, filterOn, value } = filter
                    if (filterOn) {
                        if (filterWithInput) {
                            if (value) {
                                queryElements.push(dropdownName === 'Ratings' ? 'imdbRating' : dropdownName, '=', value, '&')
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
        if (queryElements.length === 0 && !sessionStorage.getItem('titleQuery')) {
            this.props.getDefaultMovies(true)
        } else {
            //console.log(queryElements)
            let queryString = this.stringifyQuery(queryElements)
            sessionStorage.setItem('activeQuery', queryString)
            this.props.filterMovies(queryString)
        }
    }

    stringifyQuery(queryElements) {
        queryElements.pop()
        if (sessionStorage.getItem('titleQuery')) {
            let titleQuery = sessionStorage.getItem('titleQuery')
            titleQuery = queryElements.length > 0 ? `&${titleQuery}` : titleQuery
            queryElements.push(titleQuery)
        }
        let queryString = queryElements.join("")
        return queryString
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

        //i = number of the dropdown within state
        for (let i = 0; i < this.state.dropdowns.length; i++) {
            let { dropdownOn, dropdownName, filters } = dropdowns[i]

            let arrow = this.getDropdownArrow(dropdownName, dropdownOn, i)

            //idx = number of the filter within dropdown
            let filterComponents = filters.map((filter, idx) => {
                let { filterName, filterOn, minYear, maxYear, minRating, maxRating, step } = filter
                return (
                    <Filter
                        key={idx}
                        filterClass={dropdownName}
                        filterClassOn={dropdownOn}
                        name={filterName}
                        filterOn={filterOn}
                        // number of the filter within the dropdown array is used as key
                        filterNumber={idx}
                        toggleFilter={(idx) => this.toggleFilter(i, idx)}
                        addValueToJson={(value) => { this.addValueToJson(value, i, idx) }}
                        filterMovies={() => { this.checkActiveFilters() }}

                        minFilterYear={minYear}
                        maxFilterYear={maxYear}
                        minFilterRating={minRating}
                        maxFilterRating={maxRating}
                        step={step}
                    />
                )
            })
            // number of dropdown within the state array is used as key
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