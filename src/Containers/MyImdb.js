//comp-header-fix + HomePage (DinamicComp + CategoriesList)
//contine zona de switch cu route - pt schimbarea paginilor 

import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import HomePage from '../Containers/HomePage/HomePage';
import { themeDark, themeLight } from '../Theme/Theme';

import ExploreComp from '../Containers/ExploreComp/ExploreComp'
import './MyImdb.css';

import Header from '../Components/Header/Header';
import AddPage from '../Containers/AddPage/AddPage';

import EditPage from '../Containers/EditPage/EditPage';
import MovieDetails from '../Containers/MovieDetails/MovieDetails';
import { ThemeProvider } from 'styled-components';

class MyImdb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emptySearch: false,
            auth: false,
            user: '',
            token: '',
            setTheme: themeDark,
            theme: 'dark'
        }
    }
    //logic to take auth, token, user from localStorage and put it back on state on refresh
    componentDidMount = () => {
        const isAuth = localStorage.getItem('auth');
        const userToken = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        const theme = localStorage.getItem('theme');
        //console.log("Auth pe storage:", isAuth, "token:", userToken, 'user:', user)
        this.setState({
            auth: isAuth,
            token: userToken,
            user: user,
            theme: theme
        })

        if (sessionStorage.getItem('titleQuery')) {
            sessionStorage.removeItem('titleQuery')
        }
    }
    //logic for success register/login => auth:true, token pe state (un-comment console.log for token)
    handleSubmitRegister = (data, user) => {
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
    handleLogOut = () => {
        this.setState({
            auth: false,
            token: '',
            user: ''
        }, () => {
            localStorage.removeItem('auth');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        })
    }

    handlleToglleTheme = () => {
        if (this.state.setTheme == themeDark) {
            this.setState({
                setTheme: themeLight,
                theme: 'light'
            }, () => {
                localStorage.setItem('theme', this.state.theme);
            });
        } else {
            this.setState({
                setTheme: themeDark,
                theme: 'dark'
            }, () => {
                localStorage.setItem('theme', this.state.theme);
            });

        }
    }

    handleEmptySearch = () => {
        this.setState({ emptySearch: true }, () => {
            this.setState({ emptySearch: false })
        })
    }

    render() {
        //console.log("Auth/token/user pe state dupa refresh:", this.state.auth, "token:", this.state.token)
        return (
            <ThemeProvider theme={this.state.setTheme} >
                <div className="MyImdb">
                    <Header
                        handleEmptySearch={this.handleEmptySearch}
                        auth={this.state.auth}
                        user={this.state.user}
                        token={this.state.token}
                        onSubmitRegister={this.handleSubmitRegister}
                        onSubmitLogin={this.handleSubmitLogin}
                        onLogout={this.handleLogOut}
                        themeFunction={this.handlleToglleTheme}
                    />
                    <Switch>
                        <Route path="/explore" exact render={props => <ExploreComp {...props} auth={this.state.auth} token={this.state.token} emptySearch={this.state.emptySearch} />} />
                        <Route path="/explore/" component={ExploreComp} emptySearch={this.state.emptySearch} />
                        {/* <Route path="/hompage" exact component={HomePage} /> */}
                        <Route path='/hompage' exact render={props => <HomePage {...props} auth={this.state.auth} token={this.state.token} />} />
                        <Route path="/" exact component={HomePage} />
                        <Route path='/addPage'
                            exact
                            render={props => this.state.auth ?
                                <AddPage {...props}
                                    auth={this.state.auth}
                                    token={this.state.token}
                                    theme={this.state.theme} /> :
                                <Redirect to="/hompage" />
                            }
                        />
                        <Route path="/editPage/:movieId"
                            render={props => this.state.auth ?
                                <EditPage {...props}
                                    auth={this.state.auth}
                                    token={this.state.token} /> :
                                <Redirect to="/hompage" />} />
                        <Route path="/movieDetails/:movieId" exact render={props => <MovieDetails {...props} auth={this.state.auth} token={this.state.token} />} />

                    </Switch>
                </div>
            </ThemeProvider>
        );
    }
}

export default withRouter(MyImdb);


{/* <Route path="/movieDetails/:movieId"
    render={props => this.state.auth ?
        <MovieDetails {...props}
            auth={this.state.auth}
            token={this.state.token}
        /> :
        <Redirect to="/hompage" />} /> */}