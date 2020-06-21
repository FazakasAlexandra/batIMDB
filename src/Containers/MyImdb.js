//comp-header-fix + HomePage (DinamicComp + CategoriesList)
//contine zona de switch cu route - pt schimbarea paginilor 

import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../Containers/HomePage/HomePage';
import MovieCard from '../Components/MovieCard/MovieCard'

import { ExploreComp } from '../Containers/ExploreComp/ExploreComp'
import './MyImdb.css';

import Header from '../Components/Header/Header';

class MyImdb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logForm: false,
            regForm: false,
            auth: false,
            user: {},
            token: ''
        }
    }
    //logic for success register/login => auth:true, token pe state (un-comment console.log for token)
    handleSubmitRegister = (data) => {
        this.setState({
            auth: data.authenticated,
            token: data.accessToken,
            regForm : false
        })
        //console.log("Auth pe state:", this.state.auth, "token:", this.state.token)
    }
    handleSubmitLogin = (data) => {
        this.setState({
            auth: data.authenticated,
            token: data.accessToken,
            logForm : false
        })
        // console.log("Auth pe state:", this.state.auth, "token:", this.state.token)
    }

    render() {
        return (
            <div className="MyImdb">
                <Header 
                    auth={this.state.auth}
                    regForm = {this.state.regForm}
                    logForm={this.state.logForm}
                    onSubmitRegister={this.handleSubmitRegister}
                    onSubmitLogin={this.handleSubmitLogin}
                />


                {/* <MovieCard 
                    poster='https://www.arthipo.com/image/cache/catalog/genel-tasarim/all-posters/sinema-cinema-film-postersleri/yabanci-filmler/1/pfilm977-le-fabuleux-destin-damelie-poulain_d1424f8b-film-movie-posters-tablo-canvas-1000x1000.jpg'
                    title='Pioneer Card'
                    imdbRating='8.3'
                /> */}
                <Switch>
                    <Route path="/explore" exact component={ExploreComp} />
                    <Route path="/hompage" exact component={HomePage} />
                    <Route path="/" exact component={HomePage} />
                </Switch>
            </div>

        );
    }
}

export default withRouter(MyImdb);


