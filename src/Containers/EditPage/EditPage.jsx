import React from 'react';
import './EditPage.css';
import { withRouter } from 'react-router-dom';
import EditMovieDetails from '../../Components/EditMovieDetails/EditMovieDetails';


class EditPage extends React.Component {
    constructor(props) {
        super(props)
        // this.state={
        //     auth:this.props.auth,
        //     token:this.props.token,
        //     addForm:true,
        //     successMsg: false
        // }
    }

    render() {
        return (
            <div>
                <EditMovieDetails 
                // auth = {this.state.auth}
                // token = {this.state.token}
                />
            </div>
        )
    }
}

export default withRouter(EditPage);