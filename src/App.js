import React from 'react';
import ProfileUser from './Components/ProfileUser';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Home from './Components/Home';
import { connect } from 'react-redux'
import Admin from './Components/Admin'

const App = (props) => {
  const { auth } = props
  const adminID = 'NZnsaZfo8OPIYnOSOOrTa97yNcK2'
  const status = auth.uid === adminID ? Admin : ProfileUser
  return (
    <div style={{background:'#4e4d53'}}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path={'/profile/' + auth.uid} component={status} />
    </Router>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(App)
