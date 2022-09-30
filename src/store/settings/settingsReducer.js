// action - state management
import * as actionTypes from "../actions";

export const initialState = {
  settingsItems: [],
  loading: false,
  updateError: false,
  getError: false,
  success: false,
  message: null,
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SETTINGS_INFO:
      return {
        ...state,
        success: action?.payload?.success || false,
        message: action?.payload?.message || "",
        loading: action?.payload?.loading || false,
        updateError: action?.payload?.error || false,
      };
    case actionTypes.GET_SETTINGS_INFO:
      return {
        ...state,
        message: action?.payload?.message || "",
        loading: action?.payload?.loading || false,
        getError: action?.payload?.error || false,
        settingsItems: action?.payload?.settingsItems || [],
      };
    case actionTypes.RESET_SETTINGS_STORE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default settingsReducer;
