import React from 'react';
import './EditMovieDetails.css';
import { withRouter } from 'react-router-dom';

class EditMovieDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "Some text",
            isInEditMode: false,
            // id: '',
            // img: '',
            // title: '',
            // genre: '',
            // year: '',
            // description: ''
            id: '',
            Title: "Batman Begins",
            Year: "2005",
            Rated: "PG-13",
            Released: "15 Jun 2005",
            Runtime: "140 min",
            Genre: "Action, Adventure",
            Director: "Christopher Nolan",
            Writer: "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
            Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
            Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
            Language: "English, Mandarin",
            Country: "USA, UK",
            Awards: "Nominated for 1 Oscar. Another 14 wins & 72 nominations.",
        }
    }

    // state = {
    //     value: "Some text",
    //     isInEditMode: false,
    // }

    changeEditMode = () => {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }

    updateComponentValue = () => {
        this.setState({
            isInEditMode: false,
            value: this.refs.textInput.value
        })
    }


    renderEditView = () => {
        const { poster, title, genre, year, plot } = this.props
        return (
            <div>
                <div className='editMovieDiv'>
                    <input
                        type="text"
                        defaultValue={this.state.value}
                        ref="textInput"
                    />
                    <button onClick={this.changeEditMode}>X</button>
                    <button onClick={this.updateComponentValue}>Save</button>
                </div>
                {/* <div className="movieDetails-container">
                    <div className="movieDetailsImg">
                        <img src={poster} alt="movie poster" className='detailsImg' />
                    </div>
                    <div className="movieDetailsInfo">
                        <p className="infoTitle">Title: {title}</p>
                        <p className="infoGenre">Genre: {genre}</p>
                        <p className="infoYear">Year: {year}</p>
                        <br />
                        <p className="infoPlot">{plot}</p>
                        <br /><br />
                        <button className="closeMovieDetails">Close</button>
                    </div>
                </div> */}
            </div>
        )
    }
    renderDefaultView = () => {
        return (
            <div className='editMovieDiv' onDoubleClick={this.changeEditMode}>
                {this.state.value}
            </div>
        )
    }

    render() {
        return (this.state.isInEditMode ?
            this.renderEditView() :
            this.renderDefaultView()
        )
    }
}

export default EditMovieDetails;