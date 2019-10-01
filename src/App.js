import React from 'react';
import ProfileUser from './Components/ProfileUser';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Home from './Components/Home';
import { connect } from 'react-redux'

const App = (props) => {
  return (
    <div style={{background:'#4e4d53'}}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route path='/profile' component={ProfileUser} />
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
