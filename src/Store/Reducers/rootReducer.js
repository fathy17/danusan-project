import cartReducer from './cartReducer'
import { combineReducers } from 'redux'
import authReducer from './authReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    cart : cartReducer,
    auth : authReducer,
    firebase : firebaseReducer,
    firestore : firestoreReducer
})

export default rootReducer