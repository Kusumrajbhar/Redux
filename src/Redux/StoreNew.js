import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk' 

import { composewithDevTools } from 'redux-devtools-extension'

import rootReducer from './Reducer/RootReducer'

const storeNew = createStore(
    rootReducer,
    applyMiddleware(thunk),
    //composewithDevTools(applyMiddleware(thunk)),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default storeNew;