import * as actionTypes from "./actionTypes";
import htutwaiphyoe from "../../api/htutwaiphyoe";

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
        const response = await htutwaiphyoe.get("/blogs.json");
        let data = [];
        for (let i in response.data) {
            data.unshift({ id: i, ...response.data[i] });
        }
        dispatch(loadBlogs(data));
    } catch (e) {
        console.log(e);
    }
};

export const fetchBlog = (id) => async (dispatch) => {
    try {
        const response = await htutwaiphyoe.get(`/blogs/${id}.json`);
        dispatch(loadFullBlog(response.data));
        console.log(response.data);
    } catch (e) {
        console.log(e);
    }
};
