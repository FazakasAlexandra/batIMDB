import React from 'react';
import './MovieDetails.css';
import { withRouter } from 'react-router-dom';
import RespPlayer from '../HomePage/DinamicComp/RespPlayer/RespPlayer';

class MovieDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    editMovie = () => {
       // console.log('edit button',this.props)
        console.log('edit button', this.props)
        this.props.history.push('/editMovie');
        // this.props.history.push(
        //     {
        //         pathname: '/editMovie',
        //         state: this.props.location.pathname
        //     }
        // );
    }

    render() {
        console.log('movie details props', this.props.history)
        const { poster, title, genre, year, plot, id } = this.props
        return (
            <div className="movieDetails-container">
                <div className="movieDetailsImg">
                    <img src={poster} alt="movie poster" className='detailsImg' />
                </div>
                <div className="movieDetailsInfo" >
                    <p className="infoTitle">Title: {title}</p>
                    <p className="infoGenre">Genre: {genre}</p>
                    <p className="infoID">ID: {id}</p>
                    <p className="infoYear">Year: {year}</p>
                    <br />
                    <p className="infoPlot">{plot}</p>
                    <br /><br />
                    <button className="editMovie" onClick={this.editMovie}>Edit Movie</button>
                    <div className='trailer'>
                        <RespPlayer id={this.props.history.location.state}/>
                    </div>
                </div>
                <button className="closeMovieDetails">Close</button>
                



            </div>
        )
    }
}

export default withRouter(MovieDetails)