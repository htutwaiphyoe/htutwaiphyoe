import * as actionTypes from "./actionTypes";
import htutwaiphyoe from "../../api/htutwaiphyoe";
import { showError, sendRequest, disableRequest } from "./ui";
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
export const fetchBlogs = (page = 1, limit = 6) => async (dispatch) => {
    try {
        dispatch(sendRequest(true));
        dispatch(disableRequest(true));
        const response = await htutwaiphyoe.get("/api/blogs", {
            params: {
                page,
            },
        });

        if (response.data.data.data.length < limit) {
            dispatch(disableRequest(false));
        }
        dispatch(loadBlogs(response.data.data.data));
        dispatch(sendRequest(false));
    } catch (e) {
        dispatch(showError(e.response.data));
    }
};

export const fetchBlog = (slug) => async (dispatch) => {
    try {
        dispatch(sendRequest(true));
        const response = await htutwaiphyoe.get(`api/blogs/${slug}`);
        dispatch(loadFullBlog(response.data.data.data));
        dispatch(sendRequest(false));
    } catch (e) {
        dispatch(showError(e.response.data));
    }
};
