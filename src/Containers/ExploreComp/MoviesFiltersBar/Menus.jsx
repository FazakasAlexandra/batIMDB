import React from 'react'
import './Menus.css'
import '../../../Fontawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Dropdowns } from './Menus/Dropdowns.jsx'
import { withTheme } from 'styled-components';


class Menus extends React.Component {
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
                {/* large menu */}
                <div className='dropdown-menus-container' style={this.props.theme.backgroundMenu}>
                    <Dropdowns
                        filterMovies={(query) => this.props.filter(query)}
                        getDefaultMovies={()=>this.props.getDefaultMovies()}
                    />
                </div>

                {/* small menu */}
                <>
                    <span className="bars-container">
                        <FontAwesomeIcon icon={'bars'} onClick={() => { this.setState({ menuOn: !menuOn }) }} />
                    </span>
                    <div className='small-dropdown-menus-container' style={{ display: menuOn ? 'flex' : 'none' }} >
                        <Dropdowns
                            filterMovies={(query) => this.props.filter(query)}
                            getDefaultMovies={()=>this.props.getDefaultMovies()}
                        />
                    </div>
                </>
            </>
        )
    }
}

export default withTheme(Menus);

