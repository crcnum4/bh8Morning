const INITIAL_STATE = {
  list: [],
  loading: false,
  errors: {},
  count: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
