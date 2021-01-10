import * as actionTypes from "./actionTypes";
import htutwaiphyoe from "../../api/htutwaiphyoe";
import { showError } from "./ui";
// Fetch Requests for blogs
export const loadBlogs = (payload) => {
    return {
        type: actionTypes.LOAD_BLOGS,
        payload,
    };
};

export const loadFullBlog = (payload) => {
    return {
        type: actionTypes.LOAD_FULLBLOG,
        payload,
    };
};

export const clearFullBlog = () => {
    return {
        type: actionTypes.CLEAR_FULLBLOG,
    };
};
export const fetchBlogs = () => async (dispatch) => {
    try {
        const response = await htutwaiphyoe.get("/api/blogs");
        // console.log(response);
        dispatch(loadBlogs(response.data.data.data));
    } catch (e) {
        dispatch(showError(e.response.data));
    }
};

export const fetchBlog = (slug) => async (dispatch) => {
    try {
        const response = await htutwaiphyoe.get(`api/blogs/${slug}`);
        // console.log(response);
        dispatch(loadFullBlog(response.data.data.data));
    } catch (e) {
        dispatch(showError(e.response.data));
    }
};
