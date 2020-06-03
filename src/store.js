import { createStore, applyMiddleware } from 'redux'; // Basic for create a redux local work
import { composeWithDevTools } from 'redux-devtools-extension'; // Make work with devtool
import thunk from  'redux-thunk'; // Make redux return a function
import rootReducer from './reducers'

const initialState = {};

const middleware = [thunk];

// Basic Configuration to redux work well, and have to install the redux devtools extension
const store = createStore(
    rootReducer,    
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;