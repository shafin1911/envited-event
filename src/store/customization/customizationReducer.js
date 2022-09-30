// project imports
import config from "config";

// action - state management
import * as actionTypes from "../actions";
import { severity } from "./constant";

export const initialState = {
  isOpen: [], // for active default menu
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true,
  snackBarConfig: { open: false, severity: severity.success, message: "" },
  modalConfig: {
    open: false,
    severity: null,
    header: "",
    body: "",
    confirmActionBtn: () => { },
    btnLabel: ""
  },
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
  let id;
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id],
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened,
      };
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily,
      };
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius,
      };
    case actionTypes.SET_SNACKBAR:
      return {
        ...state,
        snackBarConfig: {
          open: action.payload.isOpenSnackbar,
          severity: action.payload.severity,
          message: action.payload.message,
        },
      };
    case actionTypes.RESET_SNACKBAR:
      return {
        ...state,
        snackBarConfig: { ...initialState.snackBarConfig },
      };
    case actionTypes.SET_MODAL:
      return {
        ...state,
        modalConfig: {
          open: action.payload.open,
          severity: action.payload.severity,
          header: action.payload.header,
          body: action.payload.body,
          confirmActionBtn: action.payload.confirmActionBtn,
          btnLabel: action.payload.btnLabel
        },
      };
    case actionTypes.RESET_MODAL:
      return {
        ...state,
        modalConfig: { ...initialState.modalConfig },
      };
    default:
      return state;
  }
};

export default customizationReducer;
