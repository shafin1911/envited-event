// action - state management
import * as actionTypes from "../actions";

export const initialState = {
  loading: false,
  success: false,
  message: null,
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const ladningPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_USER:
      return {
        ...state,
        message: action?.payload?.message || "",
        loading: action?.payload?.loading || false,
        getError: action?.payload?.error || false,
        userList: action?.payload?.data || [],
      };
    case actionTypes.RESET_USER_STORE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default ladningPageReducer;
