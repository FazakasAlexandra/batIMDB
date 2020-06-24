// import React from 'react';
// import './EditMovieDetails.css';

// class EditMovieDetails extends React.Component {
//     state = {
//         value: "Some text",
//         isInEditMode: false,
//     }

//     changeEditMode = () => {
//         this.setState({
//             isInEditMode: !this.state.isInEditMode
//         })
//     }

//     updateComponentValue = () => {
//         this.setState({
//             isInEditMode:false,
//             value: this.refs.textInput.value
//         })
//     }


//     renderEditView = () => {
//         return (
//             <div>
//                 <input
//                     type="text"
//                     defaultValue={this.state.value}
//                     ref="textInput"
//                 />
//                 <button onClick={this.changeEditMode}>X</button>
//                 <button onClick={this.updateComponentValue}>Save</button>
//             </div>
//         )
//     }
//     renderDefaultView = () => {
//         return (
//             <div onDoubleClick={this.changeEditMode}>
//                 {this.state.value}
//             </div>
//         )
//     }

//     render() {
//         return this.state.isInEditMode ?
//             this.renderEditView() :
//             this.renderDefaultView()

//     }
// }

// export default EditMovieDetails