import * as actionTypes from "./actionTypes";

export const sendRequest = (payload) => {
    return {
        type: actionTypes.SEND_REQUEST,
        payload,
    };
};

export const showError = (payload) => {
    return {
        type: actionTypes.SHOW_ERROR,
        payload,
    };
};

export const clearError = (payload) => {
    return {
        type: actionTypes.CLEAR_ERROR,
    };
};
