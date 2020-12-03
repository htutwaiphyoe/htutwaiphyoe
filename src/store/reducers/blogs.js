import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    blogs: [],
    fullBlog: null,
};

const loadBlogs = (state, action) => {
    return updateObject(state, { blogs: action.payload });
};
const loadFullBlog = (state, action) => {
    return updateObject(state, { fullBlog: action.payload });
};
const clearFullBlog = (state, action) => {
    return updateObject(state, { fullBlog: null });
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_BLOGS:
            return loadBlogs(state, action);
        case actionTypes.LOAD_FULLBLOG:
            return loadFullBlog(state, action);
        case actionTypes.CLEAR_FULLBLOG:
            return clearFullBlog(state, action);
        default:
            return state;
    }
};

export default reducer;
