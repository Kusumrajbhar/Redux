import { createStore } from "redux";

import rootReducer from "./reducer/RootReducer";

const store = createStore(
  rootReducer,                  //will contain combine reducer
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//after adding this extenxion redux tool will show our all states

export default store;
