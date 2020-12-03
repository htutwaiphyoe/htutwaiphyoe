import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utils";
const initialState = {
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEND_REQUEST:
            return updateObject(state, { loading: action.payload });
        default:
            return state;
    }
};
export default reducer;
