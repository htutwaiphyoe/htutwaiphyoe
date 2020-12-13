import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducers from "./store/reducers";
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";

const composeEnhancers = process.env.NODE_ENV === "development"
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;;
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(rootReducers, applyMiddleware(thunk));
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
