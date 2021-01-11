import htutwaiphyoe from "../../api/htutwaiphyoe";
import { sendRequest, showError, showToast } from "./ui";
export const submitForm = (data) => async (dispatch) => {
    try {
        dispatch(sendRequest(true));
        const response = await htutwaiphyoe.post("/api/messages", data);
        console.log(response.data);
        if (response.data.status === "success") {
            dispatch(showToast(true));
            setTimeout(() => {
                dispatch(showToast(false));
            }, 2000);
        }
        dispatch(sendRequest(false));
    } catch (e) {
        dispatch(showError(e.response.data));
    }
};
