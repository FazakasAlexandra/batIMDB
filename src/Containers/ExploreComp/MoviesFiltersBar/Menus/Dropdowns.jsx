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

    toggleFilter(dropdownNr, filterNr) {
        this.setState([...dropdowns].map((dropdown, i) => {
            // go only to the dropdown that contains the target filter
            if (i === dropdownNr) {
                dropdown.filters.map((filter, idx) => {
                    // turns on the clicked filter
                    if (idx === filterNr) {
                        filter.filterOn = !filter.filterOn
                    // turns off all the other filters
                    } else if (idx !== filterNr && filter.filterOn) {
                        filter.filterOn = !filter.filterOn
                    }
                    return filter
                })
                // renders default movie is all filters of Year or Ratings dds are off
                if (dropdown.dropdownName === 'Year' || dropdown.dropdownName === 'Ratings') {
                    // i => index of Year or Ratings dds
                    this.checkIfFiltersOn(i)
                }
            }
            return dropdown
        }))
    }

    checkIfFiltersOn(i) {
        let dropdown = this.state.dropdowns[i]
        let filtersOn=[]
        dropdown.filters.map((filter)=>{
            if(filter.filterOn) 
              filtersOn.push(filter)
        })
        console.log(filtersOn)
        if(filtersOn.length === 0){
            this.props.getDefaultMovies()
        }
    }

    checkActiveFilters() {
        let { dropdowns } = this.state
        let queryElements = []
        console.log('here')
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
        if (queryElements.length === 0) {
            this.props.getDefaultMovies()
        } else {
            let queryString = this.stringifyQuery(queryElements)
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
        console.log('query string: ', queryString)
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
            // dropdown number(i) is used for key
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