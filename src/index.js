import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppNew from "./Redux/AppNew";
import reportWebVitals from "./reportWebVitals";
import storeNew from "./Redux/StoreNew";
import store from "./Store"; //store in main dom
import { Provider } from "react-redux"; //react-redux to connect react with redux

// store.subscribe(() => console.log('updated state',store.getState())); //to check subscribe method calls change listner

store.subscribe(() => {}); //as we have added logger middleware no need to console it will logged bt middleware

//instead of consumer we have useSelector
ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App />
    </Provider> */}
    <Provider store={storeNew}>
      <AppNew />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
