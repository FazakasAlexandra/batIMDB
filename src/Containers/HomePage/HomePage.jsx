import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import DinamicComp from '../HomePage/DinamicComp/DinamicComp';
import './HomePage.css';
import CategoriesLists from '../HomePage/CategoriesLists/CategoriesLists'
import MovieDetails from '../../Components/MovieDetails/MovieDetails'
import MovieList from '../HomePage/CategoriesLists/MovieList/MovieList';

class HomePage extends Component {
    render() {
        return (
            <div className="Hompage">
                <DinamicComp/>  
                <CategoriesLists />
                <MovieDetails 
                poster = 'https://www.arthipo.com/image/cache/catalog/genel-tasarim/all-posters/sinema-cinema-film-postersleri/yabanci-filmler/1/pfilm977-le-fabuleux-destin-damelie-poulain_d1424f8b-film-movie-posters-tablo-canvas-1000x1000.jpg'
                title = 'Batman'
                genre = 'Action'
                year = '2011'
                plot = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                />
                <br/>
               
            </div>
        );
    }
}

export default withRouter(HomePage);