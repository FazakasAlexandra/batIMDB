import React from 'react';
import './MovieDetails.css';
import { withRouter } from 'react-router-dom';
import RespPlayer from '../HomePage/DinamicComp/RespPlayer/RespPlayer';
import Axios from 'axios';


class MovieDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieDetails:{}
        }
    }

    editMovie = () => {
       console.log('edit Movie',this.props)
        this.props.history.push(
            {
                pathname: '/editMovie',
                state: this.props
            }
        );
        
    }

    componentDidMount(){
            let id = this.props.history.location.state
            Axios.get(`https://ancient-caverns-16784.herokuapp.com/movies/${id}`)
            .then((response)=>{
                console.log(response.data)
                this.setState({movieDetails : response.data}, ()=>{
                    console.log(this.state.movieDetails)
                })
            })
    }

    render() {
        const { Poster, Title, Genre, Year, Runtime, Language, Country, Director, Actors, Released, Awards, Plot } = this.state.movieDetails
        return (
            <div className="movieDetails-container">
                <div className="movieDetailsImg">
                    <img src={Poster} alt="movie poster" className='detailsImg' /><br />
                    <div className="movieDetails-buttons">
                        <button className="editMovie" onClick={this.editMovie}>Edit Movie</button><br />
                        <button className="deleteMovie">Delete Movie</button>
                    </div>
                </div>
                <div className="movieDetailsInfo" >
                    <p className="infoTitle">Title: {Title}</p>
                    <p className="infoGenre">Genre: {Genre}</p>
                    <p className="infoYear">Year: {Year}</p>
                    <p className="infoRuntime">Runtime: {Runtime}</p>
                    <p className="infoLanguage">Language: {Language}</p>
                    <p className="infoCountry">Country: {Country}</p>
                    <p className="infoDirector">Director: {Director}</p>
                    <p className="infoActors">Actors: {Actors}</p>
                    <p className="infoRelease">Released: {Released}</p>
                    <p className="infoAwards">Awards: {Awards}</p>
                    <br />
                    <p className="infoPlot">{Plot}</p>
                    <br /><br />
                    <div className='trailer'>
                        <RespPlayer id={this.props.history.location.state}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MovieDetails)