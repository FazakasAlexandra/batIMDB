//comp-header-fix + HomePage (DinamicComp + CategoriesList)
//contine zona de switch cu route - pt schimbarea paginilor 

import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../Containers/HomePage/HomePage';
import {themeDark, themeLight }from '../Theme/Theme';

import { ExploreComp } from '../Containers/ExploreComp/ExploreComp'
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
            auth: false,
            user: '',
            token: '',
            setTheme: themeDark
        }
    }
    //logic to take auth, token, user from localStorage and put it back on state on refresh
    componentDidMount= () => {
        const isAuth = localStorage.getItem('auth');
        const userToken = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        //console.log("Auth pe storage:", isAuth, "token:", userToken, 'user:', user)
        this.setState({
                auth: isAuth,
                token: userToken,
                user: user
            })
    }
    //logic for success register/login => auth:true, token pe state (un-comment console.log for token)
    handleSubmitRegister = (data,user) => {
        this.setState({
            auth: data.authenticated,
            token: data.accessToken,
            user: user
        })
        //keep data in storage 
        localStorage.setItem('auth', data.authenticated);
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('user', user)
        //console.log("Auth pe state:", this.state.auth, "token:", this.state.token, this.state.user)
    }
    handleSubmitLogin = (data, user) => {
        this.setState({
            auth: data.authenticated,
            token: data.accessToken,
            user: user
        })
        //keep data in storage 
        localStorage.setItem('auth', data.authenticated);
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('user', user)
        //console.log("Auth pe state la logat:", this.state.auth, "token:", this.state.token, this.state.user)
    }
    //logic for success logout, removing all data from storage, re-setting state
    handleLogOut =() => {
        this.setState({
                auth:false,
                token:'',
                user:''
        })
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    themeFunction =(theme)=> {
        if (theme !== 'dark') {           
            this.setState({ setTheme: themeDark })             
        } else {
            this.setState({ setTheme: themeLight })            
        }
     }

    render() {  
        //console.log("Auth/token/user pe state dupa refresh:", this.state.auth, "token:", this.state.token)    
        return (
            <ThemeProvider theme={this.state.setTheme} >                
                <div className="MyImdb">
                    <Header
                        auth={this.state.auth}
                        user={this.state.user}
                        token={this.state.token}
                        onSubmitRegister={this.handleSubmitRegister}
                        onSubmitLogin={this.handleSubmitLogin}
                        onLogout={this.handleLogOut}
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


