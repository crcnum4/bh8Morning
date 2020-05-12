const SUBMIT_CHANGE = "SUBMIT_CHANGE"

export const changeForm = (field, value) => (dispatch) => {
  dispatch({
    type: "CHANGE",
    payload: {
      field,
      value,
    },
  });
};

export const submitForm = (data) => (dispatch) => {
  data.categories = data.categories.split(",");
  dispatch({
    type: SUBMIT_CHANGE,
    payload: data,
  });
};
