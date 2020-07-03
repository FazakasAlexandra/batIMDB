import React from 'react';
import axios from 'axios';

import './AddNewMovie.css';

class AddNewMovie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            preview : false,
            title : '',
            year : '',
            rating : '',
            type : '',
            language:'',
            genre:'',
            plot: '',
            actors: '',
            director: '',
            awards: '',
            imgUrl : 'https://i.pinimg.com/originals/31/d6/fb/31d6fb7595b44e4b649aec2ce079e68a.jpg'
        }
    }
    //collects input data on state
    handleChange =(event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    //renders preview
    handlePreview =(event) => {
        this.setState({ preview : true })
        event.preventDefault();
    }
    //on success closes preview, sends success msg to be rendered on AddPage | error in console
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.props.token)
        const {title, year, imdbID, type, imageUrl} = this.state;
        const headerToken = {
        headers: {'X-Auth-Token': this.props.token}
          };
        axios.post(
            'https://movies-app-siit.herokuapp.com/movies',
            {
                Title: title,
                Year: year,
                imdbID: imdbID,
                Type: type,
                Poster: imageUrl
            },
            headerToken
        ).then(response =>{
            console.log(response)
            if ( response.status === 200){
                this.setState({ 
                    preview : false 
                })
                this.props.onSubmitAdd()
            }
        }).catch(error=>{
            console.log(error)
        })
    }
    //creates className depending on theme
    createClassName(theme, element){
        const className = `${element} ${theme}`
        return className;
    }
    //creates input section (label + text)
    renderInput = (fieldName, labelName, required) => {
        if(required){
            labelName+=' *';
        }
        return (
            <div className='fieldWrapper'>
                <label htmlFor={fieldName}
                       className={this.createClassName(this.props.theme, 'inputLabel')}>{labelName}</label>
                <input
                    type='text'
                    name={fieldName}
                    id={fieldName}
                    className={this.createClassName(this.props.theme, 'addField')}
                    value={this.state[fieldName]}
                    onChange={this.handleChange}
                    required= {required}
                />
            </div>
        );
    }
    //creates preview section (label + text)
    renderPreview(value, labelName){
        const {theme} = this.props;
        return(
            <p className={this.createClassName(theme, 'pvwLine')}>
                <span className={this.createClassName(theme)}
                >{labelName}</span>  
                {this.state[value]}
            </p>
        )    
    }
    render(){
        const { theme, onCancel } = this.props;

        return(
            <div className={this.createClassName('addFormContainer', theme)}>
                <form className={this.createClassName('addForm', theme)}
                      onSubmit={this.handleSubmit}
                >
                    <div className='addPoster'>
                        <div className='imgFrames'></div>
                        <label htmlFor='addPoster' 
                               className={this.createClassName(theme,'label')}
                        >Poster URL:</label>
                        <input type='text' 
                            id='addPoster'
                            name='imageUrl'
                            className={this.createClassName(theme, 'addField')} 
                            value = {this.state.imageUrl}
                        />
                        <div className='imgFrames'></div>
                    </div>
                    <div className='addDetails'>
                        {this.renderInput('title', 'Title:',true)}
                        {this.renderInput('year', 'Year:', true)}
                        {this.renderInput('type', 'Type:',true)}
                        {this.renderInput('genre', 'Genre')}
                        {this.renderInput('awards', 'Awards:')}
                        {this.renderInput('director', 'Director')}
                        {this.renderInput('actors', 'Actors:')}
                        {this.renderInput('language', 'Language:')}
                        {this.renderInput('rating', 'ImdbRating',true)}
                        {this.renderInput('plot', 'Plot')}
                    </div> 
                    <div className='btnsWrapper'>
                           <button className={this.createClassName(theme, 'Btn')}
                                   onClick={this.handlePreview}
                            > PREVIEW </button>
                            <button type='submit'
                                    className={this.createClassName(theme, 'Btn')}
                            > ADD </button>
                            <button className={this.createClassName(theme, 'Btn')}
                                    onClick={onCancel}
                             > CANCEL </button>
                        </div> 
                </form>
                { this.state.preview && 
                    <div className={this.createClassName(theme, 'pvw')}>
                        <img src={this.state.imgUrl} alt='movie poster'/>
                        <div className='pvwDetails'>
                            {this.renderPreview('title','Title: ')}
                            {this.renderPreview('year', 'Year: ')}
                            {this.renderPreview('type', 'Type: ')}
                            {this.renderPreview('genre', 'Genre: ')}
                            {this.renderPreview('awards', 'Awards: ')}
                            {this.renderPreview('director', 'Director: ')}
                            {this.renderPreview('actors', 'Actors: ')}
                            {this.renderPreview('language', 'Language: ')}
                            {this.renderPreview('rating', 'ImdbRating: ')}
                            {this.renderPreview('plot', 'Plot: ')}
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default AddNewMovie ;


 