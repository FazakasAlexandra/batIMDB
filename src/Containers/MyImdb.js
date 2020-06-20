//comp-header-fix + HomePage (DinamicComp + CategoriesList)
//contine zona de switch cu route - pt schimbarea paginilor 

import React, { Component } from 'react';
import HomePage from '../Containers/HomePage/HomePage';
import MovieCard from '../Components/MovieCard/MovieCard'
import  LoginForm  from '../Components/Header/Login/Login';
import  RegisterForm  from '../Components/Header/Register/Register';
import {ExploreComp} from '../Containers/ExploreComp/ExploreComp'
import './MyImdb.css';

import Header from '../Components/Header/Header';

class MyImdb extends Component {
    constructor(props){
        super(props)
        this.state = {
          logForm : false,
          regForm : false,
          auth : false,
          user:{},
          token:''
        }
    }
    handleRegisterBtnClick(){
        this.setState({regForm:true})
    }
    handleLoginBtnClick(){
        this.setState({logForm:true})
    }
    handleSubmitRegister = (data) => {
        this.setState(({auth:data.authenticated,
                      token:data.accessToken,
                      regForm:false}))
    }  
    handleSubmitLogin = (data) =>{
        this.setState({auth:data.authenticated,
                       token:data.accessToken,
                       logForm:false})
        console.log("Auth pe state:", this.state.auth, "token:", this.state.token)
    }
    handleCancelBtn = () =>{
        this.setState({logForm: false, regForm: false})
    }
    render() {
        return (
            <div className="MyImdb">
                <Header />


                <button className='log-btn'onClick={()=>this.handleRegisterBtnClick()}>REGISTER</button>
                <div className='btn-container'>
                <button className='log-btn' onClick={()=>this.handleLoginBtnClick()}>LOGIN</button>
                {this.state.regForm && <RegisterForm 
                                          auth = {this.state.auth}
                                          onSubmitRegister = {this.handleSubmitRegister}
                                          onCancel = {this.handleCancelBtn}
                                        />
                }
                {this.state.logForm && <LoginForm 
                                          auth = {this.state.auth}
                                          onSubmitLogin = {this.handleSubmitLogin}
                                          onCancel = {this.handleCancelBtn}
                                        />
                }
                </div>

                
                {/* <MovieCard 
                    poster='https://www.arthipo.com/image/cache/catalog/genel-tasarim/all-posters/sinema-cinema-film-postersleri/yabanci-filmler/1/pfilm977-le-fabuleux-destin-damelie-poulain_d1424f8b-film-movie-posters-tablo-canvas-1000x1000.jpg'
                    title='Pioneer Card'
                    imdbRating='8.3'
                /> */}
                <HomePage />
                <ExploreComp/>

            </div>
        );
    }
}

export default MyImdb


