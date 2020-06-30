import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withTheme } from 'styled-components';
import DinamicComp from '../HomePage/DinamicComp/DinamicComp';
import './HomePage.css';
import CategoriesLists from '../HomePage/CategoriesLists/CategoriesLists'


class HomePage extends Component {
    render() {
        return (
            <div 
                className="Hompage" 
                style={{backgroundColor: this.props.theme.colorBackground.primary }} 
                >
                <DinamicComp/>  
                <CategoriesLists />
                <br/>
               
            </div>
        );
    }
}

export default withTheme(withRouter(HomePage));