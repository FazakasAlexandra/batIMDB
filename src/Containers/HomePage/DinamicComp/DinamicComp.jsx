import React, { Component } from 'react';
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
        };
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies =()=> {
        axios.get('https://movies-app-siit.herokuapp.com/movies?take=100').then(response => {  /* imdbRating=[0-9]& */
            this.sortArray(response.data.results);
            console.log(response)
        })
        .catch(err => {
            console.log(err);
        });
    }

    showPoster =()=> {
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
            console.log('sortate:-->   ',b.imdbRating, a.imdbRating )
            return Number(b.imdbRating) - Number(a.imdbRating);
            
        });
        this.setState({
            movies: arraySorted.slice(0, 10)
            
        })
        
    }

    handleOpenModal = id => {
        this.setState({ showModal: true, id: id });
    }

    handleCloseModal =()=> {
        this.setState({ showModal: false }); 
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
                    functionModal={e => this.handleOpenModal(e)}
                    imdbRating={movie.imdbRating}
                />
            )
        });

        return (
            <Fragment >
                <Flash><h1 style={{ color: "grey" }}>Best 10 Batman movies</h1></Flash>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={()=> this.handleCloseModal()}
                    className="Modal"
                    overlayClassName="Overlay"
                >
                   <RespPlayer id={this.state.id} />
                </ReactModal>
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
            </Fragment>
        )
    }
}

export default DinamicComp;