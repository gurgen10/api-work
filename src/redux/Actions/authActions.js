import AuthService from '../../services/AuthService';
import ProsConsService from '../../services/ProsConsService';
import { GROUP_ID, USER_ID } from '../actionTypes';
import { loadProsCons } from './prosConsActions';
import { showLoading, isError } from '../Actions/commonActions';


const authService =  new AuthService()
const prosConsService =  new ProsConsService()

const fetchGroupIdSuccess = groupId => ({
    type: GROUP_ID,
    payload: groupId
})

const fetchUserIdSuccess = userId => ({
    type: USER_ID,
    payload: userId
})


export const getGroupId =  () => {
    return async dispatch => {
        try {
            const groupId = await authService.getGroupId();

            dispatch(fetchGroupIdSuccess(groupId));
        }
        catch(e){
            console.log(e)
        }
    }
}

export const getUserId =  () => {
    return async dispatch => {
        try {
            const userId = await authService.getUserId();
            dispatch(fetchUserIdSuccess(userId))
        }
        catch(e){
            console.log(e)
        }
    }
}

export const getGroupIdAndUserId =  () => {
    return async dispatch => {
        try {
            dispatch(showLoading(true))
            const groupId = await authService.getGroupId();

            dispatch(fetchGroupIdSuccess(groupId));
            
            const userId = await authService.getUserId();
            dispatch(fetchUserIdSuccess(userId))

            const prosCons = await prosConsService.getProsCons(groupId, userId);

            dispatch(loadProsCons(prosCons))
            dispatch(showLoading(false))
        }
        catch(e){
            dispatch(isError(true));
            console.log(e)
        }
    }
}