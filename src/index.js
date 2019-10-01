import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'typeface-roboto'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Store/Reducers/rootReducer';
import thunk from 'redux-thunk'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import fbConfig from './Config/fbConfig'

const store = createStore(rootReducer, 
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig, {useFirestoreForProfile : true, userProfile : 'users', attachAuthIsReady : true }),
    reduxFirestore(fbConfig)
    )
)

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
})



