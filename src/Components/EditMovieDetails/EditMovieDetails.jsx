import React from 'react';
import './EditMovieDetails.css';
import { withRouter } from 'react-router-dom';

class EditMovieDetails extends React.Component {
    constructor (props){
        super(props)
    }
    state = {
        value: "Some text",
        isInEditMode: false,
    }

    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }

    updateComponentValue = () => {
        this.setState({
            isInEditMode:false,
            value: this.refs.textInput.value
        })
    }


    renderEditView = () => {
        return (
            <div className='editMovieDiv'>
                <input
                    type="text"
                    defaultValue={this.state.value}
                    ref="textInput"
                />
                <button onClick={this.changeEditMode}>X</button>
                <button onClick={this.updateComponentValue}>Save</button>
            </div>
        )
    }
    renderDefaultView = () => {
        return (
            <div className='editMovieDiv' onDoubleClick={this.changeEditMode}>
                {this.state.value}
            </div>
        )
    }

    render() {
        return (this.state.isInEditMode ?
            this.renderEditView() :
            this.renderDefaultView()
        ) 
    }
}

export default withRouter(EditMovieDetails);