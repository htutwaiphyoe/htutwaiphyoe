import * as actionTypes from "./actionTypes";
import htutwaiphyoe from "../../api/htutwaiphyoe";
import { sendRequest } from "./ui";
export const submitForm = (data) => async (dispatch) => {
    try {
        dispatch(sendRequest(true));
        const response = await htutwaiphyoe.post("/message.json", data);
        console.log(response);
        dispatch(sendRequest(false));
    } catch (e) {
        console.log(e);
    }
};