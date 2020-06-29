import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DinamicComp from '../HomePage/DinamicComp/DinamicComp';
import './HomePage.css';
import CategoriesLists from '../HomePage/CategoriesLists/CategoriesLists'
import MovieDetails from '../MovieDetails/MovieDetails'
import MovieList from '../HomePage/CategoriesLists/MovieList/MovieList';

class HomePage extends Component {
    render() {
        return (
            <div className="Hompage">
                <DinamicComp/>  
                <CategoriesLists />
                <br/>
               
            </div>
        );
    }
}

export default withRouter(HomePage);