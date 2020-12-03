import { combineReducers } from "redux";

import blogsReducer from "./blogs";
import uiReducer from "./ui";
export default combineReducers({
    blogs: blogsReducer,
    ui: uiReducer,
});
