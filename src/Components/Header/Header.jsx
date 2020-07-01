import React from 'react';
import { withRouter } from 'react-router-dom';
import 'fontsource-roboto';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMoon } from '@fortawesome/free-solid-svg-icons';

import RegisterForm from './Register/Register'
import LoginForm from './Login/Login'


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: props.auth,
            regForm: false,
            logForm: false
        }
    }
    
    exploreFunction = () => {
        this.props.history.push('/explore');
        // this.props.history.push({obj: path, cale, state})
    }

    hompageFunction = () => {
        this.props.history.push(
            {
                pathname: '/hompage',
                state: this.props.location.pathname
            }
        );
    }
    //logic for header AddBtn
    addPageFunction = () => {
        if(this.state.auth){
            this.props.history.push({
                pathname: '/addPage',
            });
        }else{
            window.alert('you have to be signed in to add movies')
        }
    }
    // logic for register/login/cancelForm Btns 
    handleRegisterBtnClick = () => {
        this.setState({
            regForm: true,
            logForm: false
        })
    }
    handleLoginBtnClick = () => {
        this.setState({
            logForm: true,
            regForm: false
        })
    }
    handleCancelBtn = () => {
        this.setState({ logForm: false, regForm: false })
    }

    //logic for submit register/login => sending auth, regForm, logForm from MyImdb to header state
    handleSubmitRegister = (data) => {
        this.props.onSubmitRegister(data);
        this.setState({
            regForm: this.props.regForm,
            auth: this.props.auth
        })
    }
    handleSubmitLogin = (data) => {
        this.props.onSubmitLogin(data);
        this.setState({
            logForm: this.props.logForm,
            auth: this.props.auth
        })
    }

    storeSeach = (event) => {
        if (event.target.value === '') {
            this.exploreFunction()
        } else {
            localStorage.setItem('search', event.target.value)
            this.exploreFunction()
            this.props.history.push(`/explore/${event.target.value}`)
        }
    }

    render() {
        // console.log('props history la header,', this.props.history, 'props header', this.props)
        return (
            <div className='header'>
                <div className='top'></div>
                <nav className='navBar'>
                    <img
                        className='logo'
                        alt='logo'
                        src={require('../Images/logo.png')}
                        onClick={this.hompageFunction}
                    />
                    <button
                        className='exploreBtn'
                        onClick={this.exploreFunction}
                    >Explore</button>
                    <button className='addMovieBtn'
                            onClick={this.addPageFunction}>Add Movie</button>
                    <div className='searchBar'>
                        <span className="search-input-container">
                            <FontAwesomeIcon icon={faSearch} />
                            <input type='search' className='searchInput' onChange={(event) => this.storeSeach(event)} placeholder="search by title..."/>
                        </span>
                        {/*<button className='searchBtn' value="search">Search</button>*/}
                    </div>
                    <img
                        className='mood'
                        alt='mood'
                        src={require('../Images/moon-yellow.png')}
                    
                    />
                    <button className='registerBtn'
                        onClick={() => this.handleRegisterBtnClick()}>Register</button>
                    <div className='buttonsLogReg'>
                        <button className='loginBtn'
                            onClick={() => this.handleLoginBtnClick()}>Login</button>
                        {this.state.regForm && < RegisterForm
                            auth={this.state.auth}
                            onSubmitRegister={this.handleSubmitRegister}
                            onCancel={this.handleCancelBtn}
                            />
                        }
                        {this.state.logForm && < LoginForm
                            auth={this.state.auth}
                            onSubmitLogin={this.handleSubmitLogin}
                            onCancel={this.handleCancelBtn}
                            />
                        }
                    </div>
                </nav>
            </div>
        )
    }
}
export default withRouter(Header);

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import {fade, makeStyles} from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
// // import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

// export default function Header() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
//             aria-label="open drawer"
//           >
//               <Avatar alt="logo" src="." />
//             {/* <MenuIcon /> */}
//           </IconButton>
//           <Typography className={classes.title} variant="h6" noWrap>
//             Material-UI
//           </Typography>
//           <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </div>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }