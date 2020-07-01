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
        const { _id, Title,
            // Runtime, imdbRating, Year, Plot, Awards, Director, Actors, Released, Genre, poster 
        } = this.props.movieDetail;

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
        const tokenX = {
            headers: { 'X-Auth-Token': this.props.token }
        };
        axios.put(
            `https://movies-app-siit.herokuapp.com/movies/${this.state.id}`,
            {
                Title: this.state.Title,
                runtime: this.state.runtime,
                imdbRating: this.state.imdbRating,
                Year: this.state.Year,
                plot: this.state.plot,
                awards: this.state.awards,
                director: this.state.director,
                actors: this.state.actors,
                released: this.state.released,
                Genre: this.state.Genre,
                Poster: this.state.Poster,
            },
            tokenX
        ).then(response => {
            console.log('aici e response dupa then:  ', response);
            this.props.history.goBack();

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
        console.log(this.state.id)
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
        const { Poster } = this.state;

        console.log(this.state);

        const renderInput = (fieldName, labelName) => {
            return (
                <div className='fieldWrapper'>
                    <label style={{ color: 'black' }}>{labelName}</label>
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
                        <label style={{ color: 'black' }} htmlFor='addPoster'>Poster URL:</label>
                        <input type='text'
                            name='imageUrl'
                            className='addField addPosterField'
                            value={Poster}
                            onChange={this.handleChange('poster')}
                        />
                    </div>
                    <div className='addDetails'>
                        {renderInput('Title', 'Edit Title')}
                        {renderInput('Year', 'Edit Year')}
                        {renderInput('Runtime', 'Edit Runtime')}
                        {renderInput('imdbRating', 'Edit ImdbRating')}
                        {renderInput('Plot', 'Edit plot')}
                        {renderInput('Awards', 'Edit Awards')}
                        {renderInput('Actors', 'Edit Actors')}
                        {renderInput('Released', 'Edit released')}
                        {renderInput('Genre', 'Edit genre')}

                        {/* <div className='fieldWrapper'>
                            <label htmlFor='year'>Year:</label>
                            <input
                                type='text'
                                name='year'
                                className='addField'
                                defaultValue={year}
                                onChange={this.handleChange('year')}
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