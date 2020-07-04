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
                Runtime: this.state.Runtime,
                imdbRating: this.state.imdbRating,
                Year: this.state.Year,
                Plot: this.state.Plot,
                Awards: this.state.Awards,
                Director: this.state.Director,
                Actors: this.state.Actors,
                Released: this.state.Released,
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
    }
    handleBack = (e) => {
        e.preventDefault()
        this.props.history.goBack();
    }
    deleteEditButton = (e) => {
        console.log(this.state.id);
        e.preventDefault();
        const options = {
            headers: { 'X-Auth-Token': this.props.token }
        };
        axios.delete(
            `https://movies-app-siit.herokuapp.com/movies/${this.state.id}`,
            options
        ).then(() => {
            this.props.history.goBack();
        }).catch(error => {
            console.log('DELETE: aici e eroarea de la catch', error)
        })
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
    renderInput = (fieldName, labelName) => {
        return (
            <div className='editField'>
                <label className='editLabel' >{labelName}</label>
                <input
                    type='text'
                    name={fieldName}
                    className='editInput'
                    defaultValue={this.state[fieldName]}
                    onChange={this.handleChange(fieldName)}
                />
            </div>
        );
    }

    render() {
        // const { Poster } = this.state;

        console.log(this.state);


        return (
            <form className='editForm'>
                <div className='editDetailsInputsDiv'>
                    {this.renderInput('Title', 'Edit Title')}
                    {this.renderInput('Genre', 'Edit genre')}
                    {this.renderInput('Poster', 'Edit Poster')}
                    {this.renderInput('Year', 'Edit Year')}
                    {this.renderInput('Runtime', 'Edit Runtime')}
                    {this.renderInput('imdbRating', 'Edit ImdbRating')}
                    {this.renderInput('Language', 'Edit Language')}
                    {this.renderInput('Country', 'Edit Country')}
                    {this.renderInput('Awards', 'Edit Awards')}
                    {this.renderInput('Actors', 'Edit Actors')}
                    {this.renderInput('Director', 'Edit Director')}
                    {this.renderInput('Released', 'Edit released')}
                    {/* {this.renderInput('Plot', 'Edit plot')} */}
                    <div className='editField'>
                        <label className='editLabel' htmlFor='plot'>Edit Plot:</label>
                        <textarea
                            className='editInput'
                            type='text'
                            name='Plot'
                            defaultValue={this.state.Plot}
                            onChange={this.handleChange('Plot')}
                            rows="4"
                            cols="50"
                        >{this.state.Plot}
                        </textarea>
                    </div>

                </div>

                <div className='btnsDiv'>
                    <button className='btn'
                        onClick={this.handleBack}
                    >Back
                        </button>
                    <button
                        type='submit'
                        className='btn'
                        onClick={this.saveEditButton}
                    >Save
                        </button>
                    <button
                        type='submit'
                        className='btn'
                        onClick={this.deleteEditButton}
                    >Delete Movie
                        </button>
                </div>
            </form>
        )
    }
}

export default withRouter(EditMovieDetails);


// eslint-disable-next-line no-lone-blocks
{/* <div className='addPoster'>
                        {/* <label style={{ color: 'black' }} htmlFor='addPoster'>Poster URL:</label>
                        <input type='text'
                            name='imageUrl'
                            className='addField addPosterField'
                            value={Poster}
                            onChange={this.handleChange('poster')}
/> */}
