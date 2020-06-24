import React from 'react'
import '../MoviesFiltersBar.css'
import {Dropdown} from './Dropdown'
import {RangeInput} from './RangeInput'

export class FilterMenu extends React.Component {
    constructor(){
        super()
        this.state = {
            Dropdown1Filter2on : false,
            Dropdown1filter3on : false,
            Dropdow1filter4on : false,

            Dropdown2Filter1on : false,
            Dropdown2Filter2on : false,
            Dropdown2Filter3on : false,

            Dropdown3Filter1on : false,
            Dropdown3Filter2on : false,
            Dropdown3Filter3on : false,

            Dropdown4Filter1on : false,
            Dropdown4Filter2on : false,
            Dropdown4Filter3on : false,
        }
    }
    render(){
        let {Dropdown1Filter1on, Dropdown1filter2on, Dropdow1filter3on} = this.state
        let {Dropdown2Filter1on, Dropdown2Filter2on, Dropdown2Filter3on} = this.state
        let {Dropdown3Filter1on, Dropdown3Filter2on, Dropdown3Filter3on} = this.state
        let {Dropdown4Filter1on, Dropdown4Filter2on, Dropdown4Filter3on} = this.state
    return (
        <>
             {/* 1 */}
            <Dropdown
                filterClass={'Genre'}
                filterOn={this.props.genresOn}
                showMenu={this.props.showGenreMenu}
                filterOne={'Action'}
                filterTwo={'Drama'}
                filterThree={'Comedy'}
                filterMovies={(filterClass, filter) => this.props.filter(filterClass, filter)}

                filterOneOn={Dropdown1Filter1on}
                filterTwoOn={Dropdown1filter2on}
                filterThreeOn={Dropdow1filter3on}

                turnOneOn={()=>this.setState({Dropdown1Filter1on : !Dropdown1Filter1on})}
                turnTwoOn={()=>this.setState({Dropdown1filter2on : !Dropdown1filter2on})}
                turnThreeOn={()=>this.setState({Dropdow1filter3on : !Dropdow1filter3on})}
            />
             
              {/* 2 */}
            <Dropdown
                filterClass={'Language'}
                filterOn={this.props.languagesOn}
                showMenu={this.props.showLanguageMenu}
                filterOne={'Romanian'}
                filterTwo={'English'}
                filterThree={'French'}
                filterMovies={(filterClass, filter) => this.props.filter(filterClass, filter)}

                filterOneOn={Dropdown2Filter1on}
                filterTwoOn={Dropdown2Filter2on}
                filterThreeOn={Dropdown3Filter3on}
                
                turnOneOn={()=>this.setState({Dropdown2Filter1on : !Dropdown2Filter1on})}
                turnTwoOn={()=>this.setState({Dropdown2Filter2on : !Dropdown2Filter2on})}
                turnThreeOn={()=>this.setState({Dropdown2Filter3on : !Dropdown2Filter3on})}
            />
    
             {/* 3 */}
            <Dropdown
                filterClass={'Year'}
                filterOn={this.props.yearsOn}
                showMenu={this.props.showYearMenu}
                filterOne={'1990-2000'}
                filterTwo={'2000-2010'}
                filterThree={'2010-2020'}
                filterMovies={(filterClass, filter) => this.props.filter(filterClass, filter)}


                filterOneOn={Dropdown3Filter1on}
                filterTwoOn={Dropdown3Filter2on}
                filterThreeOn={Dropdown3Filter3on}
                
                turnOneOn={()=>this.setState({Dropdown3Filter1on : !Dropdown3Filter1on})}
                turnTwoOn={()=>this.setState({Dropdown3Filter2on : !Dropdown3Filter2on})}
                turnThreeOn={()=>this.setState({Dropdown3Filter3on : !Dropdown3Filter3on})}
            />
            
             {/* 4 */}
            <Dropdown
                filterClass={'Ratings'}
                filterOn={this.props.ratingsOn}
                showMenu={this.props.showImdbRatingMenu}
                filterOne={'imdb'}
                filterTwo={'RottenTomatoes'}
                filterThree={"Metacritic"}
                filterMovies={(filterClass, filter) => this.props.filter(filterClass, filter)}

                filterOneOn={Dropdown4Filter1on}
                filterTwoOn={Dropdown4Filter2on}
                filterThreeOn={Dropdown4Filter3on}
                
                turnOneOn={()=>this.setState({Dropdown4Filter1on : !Dropdown4Filter1on})}
                turnTwoOn={()=>this.setState({Dropdown4Filter2on : !Dropdown4Filter2on})}
                turnThreeOn={()=>this.setState({Dropdown4Filter3on : !Dropdown4Filter3on})}
            />
        </>
    )
    }
}