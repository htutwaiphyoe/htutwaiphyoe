import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    loading: false,
    error: null,
    page: 1,
    requestable: true,
    toast: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEND_REQUEST:
            return updateObject(state, { loading: action.payload, error: null });
        case actionTypes.SHOW_ERROR:
            return updateObject(state, { error: action.payload, loading: false });
        case actionTypes.CLEAR_ERROR:
            return updateObject(state, { error: null, loading: false });
        case actionTypes.INCREMENT_PAGE:
            return updateObject(state, { page: state.page + 1 });
        case actionTypes.DISABLE_REQUEST:
            return updateObject(state, { requestable: action.payload });
        case actionTypes.SHOW_TOAST:
            return updateObject(state, { toast: action.payload });
        default:
            return state;
    }
};
export default reducer;
