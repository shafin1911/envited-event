import {
  checkSubscription
} from "axios/user/subscriptionApi";
import {
  GET_SUBSCRIBED_COURSES,
} from "store/actions";

export const checkUserSubscription = () => {
  return (dispatch) => {
    dispatch({
      type: GET_SUBSCRIBED_COURSES,
      payload: {
        success: false,
        message: null,
        loading: true,
        error: false,
        subscribedCourses: [],
      },
    });
    checkSubscription({})
      .then((res) => {
        dispatch({
          type: GET_SUBSCRIBED_COURSES,
          payload: {
            success: true,
            message: "Course fetched successfully!",
            loading: false,
            error: false,
            data: res?.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_SUBSCRIBED_COURSES,
          payload: {
            success: false,
            message: err.response?.data?.message || "Something went wrong!",
            loading: false,
            error: true,
          },
        });
      });
  };
};