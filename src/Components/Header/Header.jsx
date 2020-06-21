import React from 'react';
import { withRouter } from 'react-router-dom';
import 'fontsource-roboto';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMoon } from '@fortawesome/free-solid-svg-icons';


class Header extends React.Component {

    exploreFunction = () => {
        this.props.history.push('/explore');
    }

    hompageFunction = () => {
        this.props.history.push('/hompage');
    }

     storeSeach = (event) => {
        localStorage.setItem('search', event.target.value)
        this.exploreFunction()
        this.props.history.push(`/explore/${event.target.value}`)
     }

    render() {
        console.log('props la header,', this.props.history)
        return (
            <nav className='navBar'>
                <img
                    className='logo'
                    alt='logo'
                    src={require('../Images/imdbLogo.png')}
                    onClick={this.hompageFunction}
                />
                <button
                    className='exploreBtn'
                    onClick={this.exploreFunction}
                >Explore</button>
                <div className='searchBar'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type='search' className='searchInput' onChange={(event)=>this.storeSeach(event)}/>
                    {/*<button className='searchBtn' value="search">Search</button>*/}
                </div>
                <button className='mood' ><FontAwesomeIcon icon={faMoon}></FontAwesomeIcon></button>
                <button className='addMovieBtn'>Add Movie</button>
                <div className='buttonsLogReg'>
                    <button className='login-btn'>Login</button>
                    <button className='register-btn'>Register</button>
                </div>
            </nav>

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