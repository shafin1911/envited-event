import { getSettingsInfo, updateSettingsInfo } from "axios/settings/settingsApi"
import { GET_SETTINGS_INFO, UPDATE_SETTINGS_INFO } from "store/actions"

export const getMailingInfo = () => {
  return (dispatch) => {
    dispatch({
      type: GET_SETTINGS_INFO,
      payload: { message: null, loading: true, error: false },
    })
    getSettingsInfo()
      .then((res) => {
        dispatch({
          type: GET_SETTINGS_INFO,
          payload: {
            message: null,
            loading: false,
            settingsItems: res?.data,
            error: false
          },
        })
      })
      .catch((err) => {
        dispatch({
          type: GET_SETTINGS_INFO,
          payload: {
            error: true,
            message: err.response?.data?.message || "Something went wrong!",
            loading: false,
          },
        })
      })
  }
}

export const updateMailingInfo = (data) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_SETTINGS_INFO,
      payload: { success: false, message: null, loading: true, error: false },
    })
    updateSettingsInfo(data)
      .then(() => {
        dispatch({
          type: UPDATE_SETTINGS_INFO,
          payload: {
            success: true,
            message: "Mailing info updated successfully!",
            loading: false,
            error: false,
          },
        })
        dispatch(getMailingInfo())
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_SETTINGS_INFO,
          payload: {
            success: false,
            message: err.response?.data?.message || "Something went wrong!",
            loading: false,
            error: true,
          },
        })
      })
  }
}
