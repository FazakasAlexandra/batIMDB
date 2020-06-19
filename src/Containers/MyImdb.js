//comp-header-fix + HomePage (DinamicComp + CategoriesList)
//contine zona de switch cu route - pt schimbarea paginilor 

import React, { Component } from 'react';
import HomePage from '../Containers/HomePage/HomePage';
import './MyImdb.css';
import {MovieCard} from '../Components/MovieCard/MovieCard'

class MyImdb extends Component {
    render() {
        return (
            <div className="MyImdb">
                /* header component */   // componenta Daniel
                {/* <MovieCard 
                    poster='https://www.arthipo.com/image/cache/catalog/genel-tasarim/all-posters/sinema-cinema-film-postersleri/yabanci-filmler/1/pfilm977-le-fabuleux-destin-damelie-poulain_d1424f8b-film-movie-posters-tablo-canvas-1000x1000.jpg'
                    title='Pioneer Card'
                    imdbRating='8.3'
                /> */}

                <HomePage />
            </div>
        );
    }
}

export default MyImdb


