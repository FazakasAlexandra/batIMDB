//comp-header-fix + HomePage (DinamicComp + CategoriesList)
//contine zona de switch cu route - pt schimbarea paginilor 

import React, { Component } from 'react';
import HomePage from '../Containers/HomePage/HomePage';
import './MyImdb.css';


class MyImdb extends Component {
    render() {
        return (
            <div className="MyImdb">
                /* header component */   // componenta Daniel
                <HomePage />
            </div>
        );
    }
}

export default MyImdb


