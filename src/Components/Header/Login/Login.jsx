import React from 'react';
import axios from 'axios';
import './login.css' 

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            userName:'',
            password:'',
            loginError:false,
        }
    }
    handleChange =(event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit = (event) => {
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
            this.setState({ loginError : true })
        })
        event.preventDefault();
    }
    handleCancel = (event) =>{
        this.props.onCancel();
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
                <button className='cancelBtn' onClick={this.handleCancel}>CANCEL</button>
                {
                    this.state.loginError && 
                        <div className='loginError'>
                            <p className='loginMsg'>Invalid username or password</p>
                            <p classname='tryAgain'>Try again or REGISTER</p>
                        </div>
                }
            </form>
        )
    }
}
export default LoginForm;

