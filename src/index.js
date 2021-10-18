import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer } from "./reducers/reducer";

import thunk from "redux-thunk";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { getUsers } from "./sagas/request/user";
import { userReducer } from "./reducers/userReducer";
import { watcherSaga } from "./sagas/rootSaga";

const rootReducer = combineReducers({ reducer, userReducer });
const sagaMiddleWare = createSagaMiddleware();
const middleWare = [];
// middleWare.push(sagaMiddleWare);

// const store = createStore(rootReducer, applyMiddleware(...middleWare));
// sagaMiddleWare.run(watcherSaga);

const store = createStore(rootReducer, applyMiddleware(thunk));

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
