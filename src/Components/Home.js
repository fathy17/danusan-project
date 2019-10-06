import React, { Fragment } from 'react';
import Carousel from './Carousel';
import ListItem from './ListItem';
import Footer from './Footer.';
import NavbarLogin from './NavbarLogin';
import Navbar from './NavBar';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


const Home = (props) => {
    const { auth } = props
    const links = auth.uid ? <NavbarLogin /> : <Navbar />
    return (
        <Fragment>
            { links }
            <Carousel />
            <ListItem />
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection:'items'}])
)(Home)