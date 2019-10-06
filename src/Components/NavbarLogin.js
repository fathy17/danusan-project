import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Close from '@material-ui/icons/Close'
import Cart from './Cart';
import { ListItemIcon, useScrollTrigger, Slide } from '@material-ui/core';
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { signOut } from '../Store/Actions/authAction'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    avatar: {
        margin: 0,
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

function HideOnScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function NavbarLogin(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <Link to={'/profile/'+ props.auth.uid} style={{ textDecoration: 'none', color: 'black' }}><MenuItem ><ListItemIcon><AccountCircle /></ListItemIcon>Profile</MenuItem></Link>
            <MenuItem onClick={props.signOut}><ListItemIcon><Close /></ListItemIcon>Logout</MenuItem>
        </Menu>

    );

    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
                <AppBar position="fixed" style={{ background: '#f12c53' }}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title} >
                            Logo Danusan
                    </Typography>
                        <div className={classes.grow} />
                        <div>
                            <Cart />
                            <IconButton
                                size="small"
                                color="inherit"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                            >
                                <Avatar alt="Remy Sharp" className={classes.avatar} style={{color:'white', background:'#4e4d53'}}>{props.profile.initials}</Avatar>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            {renderMenu}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarLogin)