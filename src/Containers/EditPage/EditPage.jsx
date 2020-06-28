import React from 'react';
import './EditPage.css';
import { withRouter } from 'react-router-dom';
import EditMovieDetails from '../../Components/EditMovieDetails/EditMovieDetails';


class EditPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <EditMovieDetails />
            </div>
        )
    }
}

export default withRouter(EditPage);