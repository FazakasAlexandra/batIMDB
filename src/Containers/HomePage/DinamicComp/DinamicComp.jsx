import React, { Component } from 'react';
import axios from 'axios';
import RotateList from 'react-rotate-list';
/* import styled from 'styled-components';
import Bounce from '../../../Theme/Styledcomponents/Bounce'; */
import Flash from '../../../Theme/Styledcomponents/Flash';
import SingleMovie from '../DinamicComp/SingleMovie/SingleMovie';
import './DinamicComp.css';
import { Fragment } from 'react';
import Picture from './Picture/Picture';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement(document.getElementById('root'));

class DinamicComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            idToRender: '',
            modalIsOpen: false,
            setIsOpen: false,
        }
    }


    openModal() {
        this.setState({setIsOpen: true});
    }
    /* afterOpenModal() {
        subtitle.style.color = '#f00';
    } */

    closeModal() {
        this.setState({setIsOpen: false});
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        axios.get('https://movies-app-siit.herokuapp.com/movies?take=10&skip=1').then(response => {  //​/movies/all
            this.setState({
                movies: response.data.results,
            })  //am comentat-o sa nu va incurce cand randati
            console.log(response)

        })
    }

    showPoster = () => {
        const picsAndIds = [];
        this.state.movies.map((movie, idx) => {
            picsAndIds.push({
                pic: movie.Poster,
                id: movie.imdbID,
            })
        })

        if (picsAndIds.length) {
            return (
                <Picture
                    picsAndIdsArray={picsAndIds}
                    key={this.state.movies._id}
                    functionId={e => this.showTrailer(e)}
                />
            )
        }
    }

    showTrailer = (imdbID) => {
        console.log('trailer' + imdbID, ' ---- se executa');
        this.setState({ idToRender: imdbID });

    }

    render() {
        console.log('la render')
        let movies = this.state.movies.map((movie, idx) => {
            return (
                <SingleMovie
                    title={movie.Title}
                    key={movie._id}
                    year={movie.Year}
                    poster={movie.Poster}
                    runtime={movie.Runtime}
                    index={idx}
                    imdbID={movie.imdbID}
                    imdbRating={movie.imdbRating}
                />
            )
        });

        return (
            <Fragment>
                <Flash><h1 style={{ color: "grey" }}>Best 10 Batman movies</h1></Flash>
                <div className="DinamicCompMovies">
                    <div className="DinamicCompMoviesList">
                        <RotateList height={550} autoplay={true} duration={900} delay={5000}>
                            {movies}
                        </RotateList>
                    </div>
                    <div className="DinamicCompMoviesPicture">
                        {this.showPoster()}
                    </div>
                </div>
                {/*  {this.state.idToRender ? <RespPlayer id={this.state.idToRender} /> : ''} */}
            </Fragment>
        )
    }
}

export default DinamicComp;