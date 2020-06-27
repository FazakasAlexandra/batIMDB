import React from 'react'
import '../Menus.css'
import {Dropdown} from './Dropdown'
//ch
export class Dropdowns extends React.Component {
    constructor(){
        super()
        this.state = {
            Dropdown1Filter1on : false,
            Dropdown1Filter2on : false,
            Dropdow1Filter3on : false,

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

    filterMoviesByRange(filter, value){
        console.log(filter, value)
    }

    render(){
        let {
          Dropdown1Filter1on, Dropdown1Filter2on, Dropdow1Filter3on,
          Dropdown2Filter1on, Dropdown2Filter2on, Dropdown2Filter3on,
          Dropdown3Filter1on, Dropdown3Filter2on, Dropdown3Filter3on,
          Dropdown4Filter1on, Dropdown4Filter2on, Dropdown4Filter3on,
        } = this.state
    return (
        <>
             {/* 1 */}
            <Dropdown
                filterClass={'Genre'}
                filterClassOn={this.props.genresOn}
                showMenu={this.props.showGenreMenu}

                filterOne={'Action'}
                filterTwo={'Drama'}
                filterThree={'Comedy'}

                filterMovies={(filterClass, filter) => this.props.filter(filterClass, filter)}
                filterMoviesByRange={(filter, value)=> this.props.filterMoviesByRange(filter, value)}

                filterOneOn={Dropdown1Filter1on}
                filterTwoOn={Dropdown1Filter2on}
                filterThreeOn={Dropdow1Filter3on}

                turnFilterOneOn={()=>this.setState({Dropdown1Filter1on : !Dropdown1Filter1on})}
                turnFilterTwoOn={()=>this.setState({Dropdown1Filter2on : !Dropdown1Filter2on})}
                turnFilterThreeOn={()=>this.setState({Dropdow1Filter3on : !Dropdow1Filter3on})}
                
            />
             
              {/* 2 */}
            <Dropdown
                filterClass={'Ratings'}
                filterClassOn={this.props.ratingsOn}
                showMenu={this.props.showImdbRatingMenu}
                filterOne={'imdb'}
                filterTwo={'RottenTomatoes'}
                filterThree={"Metacritic"}

                filterMovies={(filterClass, filter) => this.props.filter(filterClass, filter)}
                filterMoviesByRange={(filter, value)=> this.props.filterMoviesByRange(filter, value)}

                filterOneOn={Dropdown2Filter1on}
                filterTwoOn={Dropdown2Filter2on}
                filterThreeOn={Dropdown2Filter3on}
                
                turnFilterOneOn={()=>this.setState({Dropdown2Filter1on : !Dropdown2Filter1on})}
                turnFilterTwoOn={()=>this.setState({Dropdown2Filter2on : !Dropdown2Filter2on})}
                turnFilterThreeOn={()=>this.setState({Dropdown2Filter3on : !Dropdown2Filter3on})}
            />
    
             {/* 3 */}
            <Dropdown
                filterClass={'Year'}
                filterClassOn={this.props.yearsOn}
                showMenu={this.props.showYearMenu}

                filterOne={'1990-2000'}
                filterTwo={'2000-2010'}
                filterThree={'2010-2020'}

                filterMovies={(filterClass, filter) => this.props.filter(filterClass, filter)}
                filterMoviesByRange={(filter, value)=> this.props.filterMoviesByRange(filter, value)}


                filterOneOn={Dropdown3Filter1on}
                filterTwoOn={Dropdown3Filter2on}
                filterThreeOn={Dropdown3Filter3on}
                
                turnFilterOneOn={()=>this.setState({Dropdown3Filter1on : !Dropdown3Filter1on})}
                turnFilterTwoOn={()=>this.setState({Dropdown3Filter2on : !Dropdown3Filter2on})}
                turnFilterThreeOn={()=>this.setState({Dropdown3Filter3on : !Dropdown3Filter3on})}
            />
            
             {/* 4 */}
            <Dropdown
                filterClass={'Language'}
                filterClassOn={this.props.languagesOn}
                showMenu={this.props.showLanguageMenu}
                
                filterOne={'Romanian'}
                filterTwo={'English'}
                filterThree={'French'}

                filterMovies={(filterClass, filter) => this.props.filter(filterClass, filter)}
                filterMoviesByRange={(filter, value)=> this.props.filterMoviesByRange(filter, value)}

                filterOneOn={Dropdown4Filter1on}
                filterTwoOn={Dropdown4Filter2on}
                filterThreeOn={Dropdown4Filter3on}
                
                turnFilterOneOn={()=>this.setState({Dropdown4Filter1on : !Dropdown4Filter1on})}
                turnFilterTwoOn={()=>this.setState({Dropdown4Filter2on : !Dropdown4Filter2on})}
                turnFilterThreeOn={()=>this.setState({Dropdown4Filter3on : !Dropdown4Filter3on})}
            />
        </>
    )
    }
}