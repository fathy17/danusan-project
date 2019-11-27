import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginPopUp from './LoginPopUp';
import SignUpPopUp from './SignUpPopUp';
import Cart from './Cart';
import { Link } from 'react-router-dom'
import { useScrollTrigger, Slide } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        color: ''
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

export default function Navbar(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
                <AppBar position="fixed" style={{ background: '#f12c53' }}>
                    <Toolbar>
                        <Link to="/" style={{ textDecoration: 'none', color: "white" }}><Typography variant="h6" className={classes.title} >
                            Danusan
                    </Typography></Link>
                        <div className={classes.grow} />
                        <div>
                            <Cart />
                            <SignUpPopUp />
                            <LoginPopUp />
                        </div>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </div>
    );
}
