import { 
  GET_PROS_CONS_LIST, 
  UPDATE_CONS, 
  UPDATE_PROS, 
  ADD_PROS, 
  ADD_CONS,
  DELETE_PROS,
  DELETE_CONS } from '../actionTypes';

const initialSate = {
  pros: [],
  cons: []
};

const prosConsReducer = (state = initialSate, action) => {
  switch (action.type) {
    case GET_PROS_CONS_LIST: {
      console.log('prosConsReducer');
      return {
        ...state,
        pros: [ ...action.payload.pros],
        cons: [...action.payload.cons]
      };
    }
    case DELETE_CONS: {
      console.log('prosConsReducer');
      return {
        ...state,
        cons: action.payload.cons
      };
    }
    case DELETE_PROS: {
      console.log('prosConsReducer', action.payload);
      return {
        ...state,
        pros:  action.payload,
      };
    }
    case UPDATE_CONS: {
      console.log('prosConsReducer');
      return {
        ...state,
        cons: action.payload
      };
    }
    case UPDATE_PROS: {
      console.log('prosConsReducer', action.payload);
      return {
        ...state,
        pros:  action.payload,
      };
    }
    case ADD_CONS: {
      
      const arr = state.cons
      arr.push(action.payload)
      return {
        ...state,
        cons:  arr
      };
    }
    case ADD_PROS: {
      const arr = state.pros
      arr.push(action.payload)
      return {
        ...state,
        pros:  arr,
      };
    }
    default: return state;
  }
};

export default prosConsReducer;