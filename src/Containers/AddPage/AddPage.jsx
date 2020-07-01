import React from 'react';
import { withRouter } from 'react-router-dom';

import AddNewMovie from '../../Components/AddNewMovie/AddNewMovie';
import './AddPage.css';


class AddPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            addForm:true,
            successMsg: false
        }
    }
    //submits new movie, renders success mesage for user
    handleSubmitAdd = () =>{
        this.setState({addForm : false,
                       successMsg:true,
        })
    }
    //re-opens addForm to repeat add
    handleMoreAdd =() =>{
        this.setState({addForm : true,
                      successMsg : false})
    }
    onCancel= ()=> {
        this.props.history.goBack();
    }
    render(){
        return(
            <div className='addContainer'>
                {this.state.addForm && 
                    <AddNewMovie 
                        auth = {this.props.auth}
                        token = {this.props.token}
                        onSubmitAdd = {this.handleSubmitAdd}
                        onCancel={this.onCancel}
                    />
                }
                
                {this.state.successMsg && 
                    <div className='successMsg'>
                        <h2>Movie added to the database</h2>
                        <button className='addMoreBtn'
                                onClick={this.handleMoreAdd}>ADD MORE</button>
                    </div>
                }
            </div>
            
        )
    }
}
export default withRouter(AddPage);

