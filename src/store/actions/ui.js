import * as actionTypes from "./actionTypes";

export const sendRequest = (payload) => {
    return {
        type: actionTypes.SEND_REQUEST,
        payload,
    };
};
