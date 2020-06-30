//comp-header-fix + HomePage (DinamicComp + CategoriesList)
//contine zona de switch cu route - pt schimbarea paginilor 

import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../Containers/HomePage/HomePage';
import {themeDark, themeLight }from '../Theme/Theme';

import  ExploreComp  from '../Containers/ExploreComp/ExploreComp'
import './MyImdb.css';

import Header from '../Components/Header/Header';
import AddPage from '../Containers/AddPage/AddPage';

import EditMovieDetails from '../Components/EditMovieDetails/EditMovieDetails';
import MovieDetails from '../Containers/MovieDetails/MovieDetails';
import { ThemeProvider } from 'styled-components';

class MyImdb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logForm: false,
            regForm: false,
            auth: false,
            user: {},
            token: '',
            setTheme: themeDark
        }
    }
    //logic for success register/login => auth:true, token pe state (un-comment console.log for token)
    handleSubmitRegister = (data) => {
        this.setState({
            auth: data.authenticated,
            token: data.accessToken,
            regForm: false
        })
        //console.log("Auth pe state:", this.state.auth, "token:", this.state.token)
    }
    handleSubmitLogin = (data) => {
        this.setState({
            auth: data.authenticated,
            token: data.accessToken,
            logForm: false
        })
        sessionStorage.setItem('auth', data.authenticated);
        sessionStorage.setItem('token', data.accessToken)
        // console.log("Auth pe state:", this.state.auth, "token:", this.state.token)
    }

     themeFunction =(theme)=> {
        if (theme !== 'dark') {           
            this.setState({ setTheme: themeDark })             
        } else {
            this.setState({ setTheme: themeLight })            
        }
     }

    render() {      
        return (
            <ThemeProvider theme={this.state.setTheme} >                
                <div className="MyImdb">
                    <Header
                        auth={this.state.auth}
                        regForm={this.state.regForm}
                        logForm={this.state.logForm}
                        onSubmitRegister={this.handleSubmitRegister}
                        onSubmitLogin={this.handleSubmitLogin}
                        themeFunction={e=> this.themeFunction(e)}
                    />
                    <Switch>
                        <Route path="/explore" exact component={ExploreComp} />
                        <Route path="/explore/" component={ExploreComp} />
                        <Route path="/hompage" exact component={HomePage} />
                        <Route path="/" exact component={HomePage} />
                        <Route path='/addPage' exact render={props => <AddPage {...props} auth={this.state.auth} token={this.state.token} />} />
                        <Route path="/editPage" exact component={EditMovieDetails} />
                        <Route path="/movieDetails" exact component={MovieDetails} />
                    </Switch>
                </div>
            </ThemeProvider>
        );
    }
}

export default withRouter(MyImdb);


