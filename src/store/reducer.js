import { combineReducers } from "redux";

// reducer import
import customizationReducer from "./customization/customizationReducer";
import settingsReducer from "./settings/settingsReducer";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  settings: settingsReducer,
});

export default reducer;
