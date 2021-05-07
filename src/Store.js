import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducer/RootReducer";

//import { composewithDevTools } from 'redux-devtools-extension'

import logger from 'redux-logger'

const store = createStore(
  rootReducer,                  //will contain combine reducer
  //applyMiddleware(logger),
 // composewithDevTools(applyMiddleware(logger))
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//after adding this extenxion redux tool will show our all states

//console.log('initial state', store.getState());  //to get the state

//store.dispatch(text())

export default store;

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()




// import { createStore, applyMiddleware  } from "redux";

// import thunk from 'redux-thunk';

// import rootReducer from "./reducer/RootReducer";

// const store = createStore(
//   rootReducer,                  //will contain combine reducer
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// //after adding this extenxion redux tool will show our all states

// export default store;
