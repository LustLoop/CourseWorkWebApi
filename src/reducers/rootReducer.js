import { combineReducers } from 'redux'
import bookReducer from "./bookReducer";
import feedReducer from "./feedReducer";

export default combineReducers({
    feedReducer,
    bookReducer
})