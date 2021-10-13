const useReducer = (state = {
  user: {}
}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default useReducer;
