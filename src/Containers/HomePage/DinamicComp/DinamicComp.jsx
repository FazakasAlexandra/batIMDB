import React, { Component } from 'react';
import { withTheme } from 'styled-components';
import axios from 'axios';
import RotateList from 'react-rotate-list';
import Flash from '../../../Theme/Styledcomponents/Flash';
import SingleMovie from '../DinamicComp/SingleMovie/SingleMovie';
import './DinamicComp.css';
import { Fragment } from 'react';
import Picture from './Picture/Picture';
import ReactModal from 'react-modal';
import RespPlayer from '../DinamicComp/RespPlayer/RespPlayer';


ReactModal.setAppElement(document.getElementById('root'));
class DinamicComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            showModal: false,
            id: '',
            theme: 'dark',
        };
    }

    componentDidUpdate() {
        if (this.state.theme !== sessionStorage.getItem('theme')) {
            this.setState({ theme: sessionStorage.getItem('theme') });
        }
    }

    componentDidMount() {
        this.getMovies();
        this.setState({ theme: sessionStorage.getItem('theme') });
    }

    getMovies = () => {
        axios.get('https://movies-app-siit.herokuapp.com/movies?Type=movie&take=100').then(response => {
            this.sortArray(response.data.results);
        })
            .catch(err => {
                console.log(err);
            });
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
                    functionModal={e => this.handleOpenModal(e)}
                />
            )
        }
    }

    sortArray = array => {
        const arraySorted = array.sort(function (a, b) {
            return Number(b.imdbVotes) - Number(a.imdbVotes);

        });
        this.setState({
            movies: arraySorted.slice(0, 10)
        })
    }

    handleOpenModal = id => {
        this.setState({ showModal: true, id: id });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    render() {
        /* console.log('la DinamicComp render', this.props) */
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
                    functionModal={e => this.handleOpenModal(e)}
                    imdbRating={movie.imdbRating}
                />
            )
        });
        return (
            <Fragment >
                <Flash><h1 style={{ color: "grey" }}>10 most voted Batman movies</h1></Flash>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={() => this.handleCloseModal()}
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <RespPlayer id={this.state.id} />
                </ReactModal>
                <div className="DinamicCompMovies"
                    style={this.props}
                >
                    <div className="DinamicCompMoviesList">
                        <RotateList height={550} autoplay={true} duration={900} delay={5000}>
                            {movies}
                        </RotateList>
                    </div>
                    <div className="DinamicCompMoviesPicture">
                        {this.showPoster()}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withTheme(DinamicComp);