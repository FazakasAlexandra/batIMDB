import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withTheme } from 'styled-components';
import DinamicComp from '../HomePage/DinamicComp/DinamicComp';
import Flash from '../../Theme/Styledcomponents/Flash';
import './HomePage.css';
import CategoriesLists from '../HomePage/CategoriesLists/CategoriesLists'


class HomePage extends Component {
    render() {
        return (
            <div
                className="Hompage"
                style={{ backgroundColor: this.props.theme.colorBackground.primary }}
            >
                <Flash>
                    <h1 style={{ 
                            color: this.props.theme.fontColor.secondary,
                            marginTop: "25px" 
                            }}>
                        10 most voted Batman movies
                    </h1>
                </Flash>
                <div
                    className="dinamicComp"
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: "15px",
                        marginBottom: "15px"
                    }}
                >
                    <img className="frame" src={require('../../Images/frameBlack1.png')} />
                    <DinamicComp />
                    <img className="frame" src={require('../../Images/frameBlack1.png')} />
                </div>

                <CategoriesLists />
                <br />

            </div>
        );
    }
}

export default withTheme(withRouter(HomePage));