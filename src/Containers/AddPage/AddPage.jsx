import React from 'react';
import { withRouter } from 'react-router-dom';

import AddNewMovie from '../../Components/AddNewMovie/AddNewMovie';
import './AddPage.css';


class AddPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            // token:this.props.token
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
    render(){
        return(
            <div className='addContainer'>
                {this.state.addForm && 
                    <AddNewMovie 
                        onSubmitAdd={this.handleSubmitAdd}
                    />
                }
                
                {this.state.successMsg && 
                    <div className='successMsg'>
                        <h2>Movie added to database</h2>
                        <button className='addMoreBtn'
                                onClick={this.handleMoreAdd}>Add more</button>
                    </div>
                }
            </div>
            
        )
    }
}
export default withRouter(AddPage);

