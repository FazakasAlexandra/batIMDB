import React from 'react';
import './EditMovieDetails.css';
import { withRouter } from 'react-router-dom';

class EditMovieDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // preview: false,
            auth: props.auth,
            token: props.token,
            title: '',
            year: '',
            rating: '',
            type: '',
            language: '',
            country: '',
            description: '',
            actors: '',
            director: '',
            awards: '',
            imgUrl: 'https://i.pinimg.com/originals/31/d6/fb/31d6fb7595b44e4b649aec2ce079e68a.jpg'
        }
    }
    render() {
        const { title, year, rating, type, imageUrl, language, country, description, actors, director, awards } = this.state;
        return (
            <div className='addFormContainer'>
                <form className='addForm' onSubmit={this.handleSubmit}>
                    <div className='addPoster'>
                        <div className='ceva'></div>
                        <label htmlFor='addPoster'>Poster URL:</label>
                        <input type='text'
                            id='addPoster'
                            name='imageUrl'
                            className='addField addPosterField'
                            value={imageUrl}
                        />
                        <div className='ceva'></div>
                    </div>

                    <div className='addDetails'>
                        <div className='fieldWrapper'>
                            <label htmlFor='title'>Title*:</label>
                            <input type='text'
                                name='title'
                                id='addTitle'
                                className='addField'
                                value={title}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className='fieldWrapper'>
                            <label htmlFor='title'>Year*:</label>
                            <input type='text'
                                name='year'
                                id='addYear'
                                className='addField'
                                value={year}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className='fieldWrapper'>
                            <label htmlFor='title'>Type*:</label>
                            <input type='text'
                                name='type'
                                id='addType'
                                className='addField'
                                value={type}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className='fieldWrapper'>
                            <label htmlFor='title'>Director:</label>
                            <input type='text'
                                name='director'
                                id='addDirector'
                                className='addField'
                                value={director}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='fieldWrapper'>
                            <label htmlFor='title'>Language:</label>
                            <input type='text'
                                name='language'
                                id='addLanguage'
                                className='addField'
                                value={language}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='fieldWrapper'>
                            <label htmlFor='title'>Country:</label>
                            <input type='text'
                                name='country'
                                id='addCountry'
                                className='addField'
                                value={country}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='fieldWrapper'>
                            <label htmlFor='title'>Actors:</label>
                            <input type='text'
                                name='actors'
                                id='addActors'
                                className='addField'
                                value={actors}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='fieldWrapper'>
                            <label htmlFor='title'>Awards:</label>
                            <input type='text'
                                name='awards'
                                id='addAwards'
                                className='addField'
                                value={awards}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='fieldWrapper'>
                            <label htmlFor='title'>Rating*:</label>
                            <input type='text'
                                name='rating'
                                id='addRating'
                                className='addField'
                                value={rating}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className='fieldWrapper'>
                            <label htmlFor='title'>Description:</label>
                            <textarea
                                name='description'
                                id='addDescription'
                                className='addField'
                                value={description}
                                onChange={this.handleChange}

                            />
                        </div>
                    </div>

                    <div className='btnsWrapper'>
                        <button className='pvwBtn'
                            onClick={this.handlePreview}>Preview</button>
                        <button type='submit'
                            className='addBtn'>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditMovieDetails;

// class EditMovieDetails extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: 'ceva text',
//             isInEditMode: false,
//             newTitleValue : ''
//             // id: '',
//             // img: '',
//             // title: '',
//             // genre: '',
//             // year: '',
//             // description: ''
//             // id: '',
//             // Title: "Batman Begins",
//             // Year: "2005",
//             // Rated: "PG-13",
//             // Released: "15 Jun 2005",
//             // Runtime: "140 min",
//             // Genre: "Action, Adventure",
//             // Director: "Christopher Nolan",
//             // Writer: "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//             // Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//             // Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
//             // Language: "English, Mandarin",
//             // Country: "USA, UK",
//             // Awards: "Nominated for 1 Oscar. Another 14 wins & 72 nominations.",
//         }
//     }

//     // state = {
//     //     value: "Some text",
//     //     isInEditMode: false,
//     // }

//     changeEditMode = () => {
//         this.setState({
//             isInEditMode: !this.state.isInEditMode
//         })
//     }

//     updateComponentValue = () => {
//         this.setState({
//             isInEditMode: false,
//             value: this.refs.textInput.value
//         })
//     }
//     // saveEditPostButton = async () => {
//     //     const { post: { id: idPost } } = this.props;
//     //     const { editPostTitle, editPostText, editPostAuthor, editPostDate } = this.state;
//     //     const postUpdate = {
//     //         title: editPostTitle,
//     //         text: editPostText,
//     //         author: editPostAuthor,
//     //         date: editPostDate
//     //     }
//     //     const updateInputPost = await this.fetchApi.updatePost(idPost, postUpdate)
//     //     const postsApi = await this.fetchApi.getPosts()
//     //     this.props.onBackButton(updateInputPost)
//     //     return postsApi
//     // }
//     saveEditPostButton = () => {
//         this.setState({
//             isInEditMode: !this.state.isInEditMode
//         })
//         console.log('this.props aici  :',this.props)

//         // const { post: { id: idPost } } = this.props;
//         // const { editPostTitle, editPostText, editPostAuthor, editPostDate } = this.state;
//         // const postUpdate = {
//         //     title: editPostTitle,
//         //     text: editPostText,
//         //     author: editPostAuthor,
//         //     date: editPostDate
//         // }
//         // const updateInputPost = await this.fetchApi.updatePost(idPost, postUpdate)
//         // const postsApi = await this.fetchApi.getPosts()
//         // this.props.onBackButton(updateInputPost)
//         // return postsApi
//     }


//     renderEditView = () => {
//         const { poster, title, genre, year, plot } = this.props
//         return (
//             <div>
//                 <div className='editMovieDiv'>
//                     <input
//                         type="text"
//                         defaultValue={this.state.value}
//                         ref="textInput"
//                     />
//                     <button onClick={this.changeEditMode}>X</button>
//                     <button onClick={this.updateComponentValue}>Save3</button>
//                     <button onClick={this.saveEditPostButton}>Save2</button> 
//                 </div>

//                 {/* <div className="movieDetails-container">
//                     <div className="movieDetailsImg">
//                         <img src={poster} alt="movie poster" className='detailsImg' />
//                     </div>
//                     <div className="movieDetailsInfo">
//                         <p className="infoTitle">Title: {title}</p>
//                         <p className="infoGenre">Genre: {genre}</p>
//                         <p className="infoYear">Year: {year}</p>
//                         <br />
//                         <p className="infoPlot">{plot}</p>
//                         <br /><br />
//                         <button className="closeMovieDetails">Close</button>
//                     </div>
//                 </div> */}
//             </div>
//         )
//     }
//     renderDefaultView = () => {
//         return (
//             <div className='editMovieDiv' onDoubleClick={this.changeEditMode}>
//                 {this.state.value}

//             </div>
//         )
//     }

//     render() {
//         return (this.state.isInEditMode ?
//             this.renderEditView() :
//             this.renderDefaultView()
//         )
//     }
// }

// export default EditMovieDetails;