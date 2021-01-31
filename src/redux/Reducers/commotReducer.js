import { SHOW_LOADING, IS_ERROR } from '../actionTypes';
  
  const initialSate = {
    isLoading: true,
    isError: false,
  }
  
  const commonReducer = (state = initialSate, action) => {
    switch (action.type) {
      case SHOW_LOADING: return {
        ...state,
        isLoading: action.payload
      };
      case IS_ERROR: return {
        ...state,
        isError: action.payload
      };
      default: return {
        ...state
      };
    }
  };
  
  export default commonReducer;