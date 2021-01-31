
import { combineReducers } from 'redux';
import prosConsReducer from './prosConsReducer';
import authReducer from './authReducer';
import commonReducer from './commotReducer';

const rootReducer = combineReducers({
    prosConsReducer,
    authReducer,
    commonReducer
});

export default rootReducer;