//comp-header-fix + HomePage (DinamicComp + CategoriesList)
//contine zona de switch cu route - pt schimbarea paginilor 

import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../Containers/HomePage/HomePage';

import { ExploreComp } from '../Containers/ExploreComp/ExploreComp'
import './MyImdb.css';

import Header from '../Components/Header/Header';
import AddPage from '../Containers/AddPage/AddPage';

// import EditMovieDetails from '../Components/EditMovieDetails/EditMovieDetails';
import EditPage from './EditPage/EditPage';

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
        sessionStorage.setItem('auth',data.authenticated);
        sessionStorage.setItem('token',data.accessToken)
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
                <Switch>
                    <Route path="/explore" exact component={ExploreComp}/>
                    <Route path="/explore/" component={ExploreComp}/>
                    <Route path="/hompage" exact component={HomePage} />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/addPage" exact component={AddPage}/>
                    <Route path="/editPage" exact component={EditPage}/>
                </Switch>
            </div>

        );
    }
}

export default withRouter(MyImdb);


