import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { songReducer } from "./reducers/SongReducer"

const initialState = {}

const reducer = combineReducers({
    mainSong: songReducer,
})

const store  = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
)
export default store;
