import htutwaiphyoe from "../../api/htutwaiphyoe";
import { sendRequest, showError } from "./ui";
export const submitForm = (data) => async (dispatch) => {
    try {
        dispatch(sendRequest(true));
        const response = await htutwaiphyoe.post("/message.json", data);
     
        dispatch(sendRequest(false));
    } catch (e) {
        dispatch(showError(e));
    }
};
