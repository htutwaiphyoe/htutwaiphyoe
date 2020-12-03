import { combineReducers } from "redux";

import blogsReducer from "./blogs";
export default combineReducers({
    blogs: blogsReducer,
});
