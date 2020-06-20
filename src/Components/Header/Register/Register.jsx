import React from 'react';
import axios from 'axios';
import './register.css' 

class RegisterForm extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            userName:'',
            password:'',
            registerError: false,
        }
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit=(event)=>{
        const {userName, password} = this.state;
        
        axios.post(
            'https://movies-app-siit.herokuapp.com/auth/register',
            {username: userName,
            password: password}
        ).then(response =>{
            console.log("success register response:", response)
            if(response.status === 200){
                this.props.onSubmitRegister(response.data)
            }
              
        }).catch(error=>{
            console.log("register error msg:", error)
            this.setState({ registerError : true })
        })
       
        event.preventDefault();
    }
    handleCancel = (event) =>{
        this.props.onCancel();
    }
    render(){
        const {userName, password} = this.state;
        
        return(
            <form className='reg-form'>
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
                <button type='submit'className='submitBtn'onClick={()=>this.handleSubmit}>SUBMIT</button>
                <button className='cancelBtn' onClick={this.handleCancel}>CANCEL</button>
                {
                    this.state.registerError && 
                        <div className='registerError'>
                            <p className='loginMsg'>Ceva mesaj de eroare</p>
                        </div>
                }
            </form>
        )
    }
}
export  default RegisterForm