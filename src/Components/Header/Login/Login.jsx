import React from 'react';
import axios from 'axios';
import './login.css' 

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            userName:'',
            password:'',
            loginError:'',
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit(event){
        const {userName, password} = this.state;
        axios.post(
            'https://movies-app-siit.herokuapp.com/auth/login',
            {username: userName,
            password: password}
        ).then(response =>{
            console.log("success login response:", response)
            if(response.status === 200){
                this.props.onSubmitLogin(response.data)
            }
              
        }).catch(error=>{
            console.log("login error msg:",error)
        })
        event.preventDefault();
    }
    
    
    render(){
        const {userName, password} = this.state;
        return(
            <form className='log-form' onSubmit={this.handleSubmit}>
                <input type='text'
                       className='log-field'
                       name='userName'
                       placeholder='Username'
                       value = {userName}
                       onChange={this.handleChange}
                       required />
                <input type='password'
                       className='log-field'
                       name='password'
                       placeholder='Password'
                       value={password}
                       onChange={this.handleChange} 
                       required/>
                <button type='submit'className='submitBtn'>SUBMIT</button>
            </form>
        )
    }
}
export default LoginForm;

