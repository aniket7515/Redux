// we can make only one store in redux so we merge all reducer in one index

import { combineReducers } from "redux";

import cardItems from "./reducer";


// combine all reducers

export default combineReducers({
    cardItems,
})

