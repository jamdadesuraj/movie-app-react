const movieReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING_MOVIE":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_LOADING_DATA":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case "SET_ERROR_MOVIE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default movieReducer;
