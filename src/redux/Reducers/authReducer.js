import { GROUP_ID, USER_ID } from '../actionTypes';

const initialSate = {
  groupId: '',
  userId: ''
};

const authReducer = (state = initialSate, action) => {
  switch (action.type) {
    case GROUP_ID: {
      return {
        ...state,
        groupId: action.payload,
      };
    }
    case USER_ID: {
      return {
        ...state,
        userId: action.payload,
      };
    }
    default: return state;
  }
};

export default authReducer;