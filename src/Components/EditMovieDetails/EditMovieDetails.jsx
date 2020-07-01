import React from 'react';
import './EditMovieDetails.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class EditMovieDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // auth: props.auth,
            // token:props.token,
            id: '',
            title: '',
            runtime: '',
            imdbRating: '',
            year: '',
            plot: '',
            awards: '',
            director: '',
            actors: '',
            released: '',
            genre: '',
            poster: ''
            // imgUrl: 'https://i.pinimg.com/originals/31/d6/fb/31d6fb7595b44e4b649aec2ce079e68a.jpg'
        }
    }
    componentDidMount = () => {
        const { _id, Title, runtime, imdbRating, year, plot, awards, director, actors, released, genre, poster } = this.props.movieDetail;

        this.setState({
            ...this.props.movieDetail,
            id: _id,
            title: Title,
        });
    }



    handleChange(key) {
        return (event) => {
            console.log('modificare: ', event.target.value)
            this.setState({ [key]: event.target.value })
        }
    }

    updateMovie = () => {
        // console.log('token-ul este aici', this.state.token)
        // console.log('auth-ul este aici', this.state.auth)
        // console.log('id-ul este aici', this.state.id)
        // console.log('title-ul este aici', this.state.title)
        const tokenX = {
            headers: { 'X-Auth-Token': this.props.token }
        };
        axios.put(
            `https://movies-app-siit.herokuapp.com/movies/${this.state.id}`,
            {
                Title: this.state.Title,
                // runtime: { runtime },
                // imdbRating: { imdbRating },
                // year: { year },
                // plot: { plot },
                // awards: { awards },
                // director: { director },
                // actors: { actors },
                // released: { released },
                // genre: { genre },
                // poster: { poster },
            },
            tokenX
        ).then(response => {
            console.log('aici e response dupa then:  ', response)

        }).catch(error => {
            console.log('aici e eroarea de la catch', error)
        })
    }

    saveEditButton = (e) => {
        e.preventDefault();
        this.updateMovie();
        console.log('this.state ', this.state);
        // this.props.history.goBack();
    }
    handleBack = (e) => {
        e.preventDefault()
        this.props.history.goBack();
    }
    deleteEditButton = (e) => {
        this.props.history.goBack();
        e.preventDefault();
        // const tokenX = {
        //     headers: { 'X-Auth-Token': this.props.token }
        // };
        // axios.delete(
        //     `https://movies-app-siit.herokuapp.com/movies/${this.state.id}`,
        //     tokenX
        // ).then(() => {
        //     this.props.history.goBack();
        // }).catch(error => {
        //     console.log('DELETE: aici e eroarea de la catch', error)
        // })
    }
    // divForUpdate=(type)=> {
    //     return (
    //         <div className='fieldWrapper'>
    //             <label htmlFor='(type)'>`${type}`:</label>
    //             <input
    //                 type='text'
    //                 name='`${type}`'
    //                 className='addField'
    //                 defaultValue={type}
    //                 onChange={this.handleChange(`${type`)}
    //             />
    //         </div>
    //     )
    // }
    render() {
        const {
            poster,
            imdbRating,
            title,
            plot,
            runtime,
            released,
            genre,
            year, rating, type, imageUrl, language, country, description, actors, director, awards } = this.state;

        console.log(this.state);

        const renderInput = (fieldName, labelName) => {
            return (
                <div className='fieldWrapper'>
                    <label>{labelName}</label>
                    <input
                        type='text'
                        name={fieldName}
                        className='addField'
                        value={this.state[fieldName]}
                        onChange={this.handleChange(fieldName)}
                    />
                </div>
            );
        }
        return (
            <div className='addFormContainer'>
                <form className='addForm'>
                    <div className='addPoster'>
                        <label htmlFor='addPoster'>Poster URL:</label>
                        <input type='text'
                            name='imageUrl'
                            className='addField addPosterField'
                            value={poster}
                            onChange={this.handleChange('poster')}
                        />
                    </div>
                    <div className='addDetails'>
                        {renderInput('Title', 'Title :')}
                        {renderInput('Year', 'Year :')}
                        {renderInput('Runtime', 'Runtime :')}
                        {renderInput('imdbRating', 'ImdbRating :')}
                        {renderInput('Plot', 'plot :')}
                        {renderInput('Awards', 'Awards :')}
                        {renderInput('Director', 'Director :')}

                        {/* <div className='fieldWrapper'>
                            <label htmlFor='year'>Year:</label>
                            <input
                                type='text'
                                name='year'
                                className='addField'
                                defaultValue={year}
                                onChange={this.handleChange('year')}
                            />
                        </div>
                        <div className='fieldWrapper'>
                            <label htmlFor='runtime'>Runtime:</label>
                            <input
                                type='text'
                                name='runtime'
                                className='addField'
                                defaultValue={runtime}
                                onChange={this.handleChange('runtime')}
                            />
                        </div>
                        <div className='fieldWrapper'>
                            <label htmlFor='imdbRating'>ImdbRating:</label>
                            <input
                                type='text'
                                name='imdbRating'
                                className='addField'
                                defaultValue={imdbRating}
                                onChange={this.handleChange('imdbRating')}
                            />
                        </div>
                        <div className='fieldWrapper'>
                            <label htmlFor='plot'>Description:</label>
                            <input
                                type='text'
                                name='plot'
                                className='addField'
                                defaultValue={plot}
                                onChange={this.handleChange('plot')}
                            />
                        </div>
                        <div className='fieldWrapper'>
                            <label htmlFor='awards'>Awards:</label>
                            <input
                                type='text'
                                name='awards'
                                className='addField'
                                defaultValue={awards}
                                onChange={this.handleChange('awards')}
                            />
                        </div>
                        <div className='fieldWrapper'>
                            <label htmlFor='director'>Director:</label>
                            <input
                                type='text'
                                name='director'
                                className='addField'
                                defaultValue={director}
                                onChange={this.handleChange('director')}
                            />
                        </div>
                        <div className='fieldWrapper'>
                            <label htmlFor='actors'>Actors:</label>
                            <input
                                type='text'
                                name='actors'
                                className='addField'
                                defaultValue={actors}
                                onChange={this.handleChange('actors')}
                            />
                        </div>
                        <div className='fieldWrapper'>
                            <label htmlFor='released'>Released:</label>
                            <input
                                type='text'
                                name='released'
                                className='addField'
                                defaultValue={released}
                                onChange={this.handleChange('released')}
                            />
                        </div>
                        <div className='fieldWrapper'>
                            <label htmlFor='genre'>Genre:</label>
                            <input
                                type='text'
                                name='genre'
                                className='addField'
                                defaultValue={genre}
                                onChange={this.handleChange('genre')}
                            />
                        </div> */}
                    </div>

                    <div className='btnsWrapper'>
                        <button className='pvwBtn'
                            onClick={this.handleBack}>Back
                            </button>
                        <button
                            type='submit'
                            className='addBtn'
                            onClick={this.saveEditButton}
                        >Save
                        </button>
                        <button
                            type='submit'
                            className='addBtn'
                            onClick={this.deleteEditButton}
                        >Delete Movie
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(EditMovieDetails);