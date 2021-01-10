import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEND_REQUEST:
            return updateObject(state, { loading: action.payload, error: null });
        case actionTypes.SHOW_ERROR:
            return updateObject(state, { error: action.payload, loading: false });
        case actionTypes.CLEAR_ERROR:
            return updateObject(state, { error: null, loading: false });
        default:
            return state;
    }
};
export default reducer;
